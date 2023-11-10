import React, { useState, useEffect, useRef } from "react";
import { Column } from "primereact/column";
import "./_index.scss";
import { DataTable, DataTableDataSelectableEvent } from "primereact/datatable";
import { RootState, useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { IEventLogs } from "../../redux/logs/types";
import { fetchLogs } from "../../redux/logs/asyncActions";
import { setPage } from "../../redux/logs/logsSlice";
import { getLogsFromLS } from "../../utils/local-storage";
import { setLogsToLS } from "../../utils/local-storage";
import { changeLogFromLS } from "../../utils/local-storage";

const EventLogsDatatable: React.FC = () => {
  const dispatch = useAppDispatch();
  const logs = useSelector((state: RootState) => state.logs.items);
  const { windowWidth, breakPointMobile } = useSelector(
    (state: RootState) => state.window
  );
  const [localLogs, setLocalLogs] = useState<IEventLogs[]>([]);
  const currentPage = useSelector((state: RootState) => state.logs.page);
  const [selectedLog, setSelectedLog] = useState<IEventLogs | null>(null);
  const selectedLogRef = useRef(selectedLog);
  const { searchValue, onlyUnread } = useSelector(
    (state: RootState) => state.filter
  );

  const isSelectable = (data: IEventLogs) => data.completed === false;
  const isRowSelectable = (event: DataTableDataSelectableEvent) =>
    event.data ? isSelectable(event.data) : true;
  const rowClassName = (data: IEventLogs) =>
    isSelectable(data) ? "" : "p-disabled";

  useEffect(() => {
    selectedLogRef.current = selectedLog;
  }, [selectedLog]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const key = event.code;
      if (key !== "Space" || !selectedLogRef.current?.id) return;
      changeLogFromLS(selectedLogRef.current.id);
      setLocalLogs(getLogsFromLS());
    };

    document.addEventListener("keydown", (event) => onKeyDown(event));
    return document.removeEventListener("keydown", (event) => onKeyDown(event));
  }, []);

  const getLogs = async () => {
    dispatch(fetchLogs(currentPage));
    dispatch(setPage());
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getLogs();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentPage]);

  React.useEffect(() => {
    getLogs();
  }, []);

  React.useEffect(() => {
    setLogsToLS(logs, "new");
    setLocalLogs(
      getLogsFromLS().filter((item) => item.title?.includes(searchValue))
    );
  }, [logs, searchValue, onlyUnread]);

  return (
    <DataTable
      value={
        onlyUnread
          ? localLogs.filter((item) => item.completed === false)
          : localLogs
      }
      selectionMode="single"
      selection={selectedLog!}
      onSelectionChange={(e) => {
        setSelectedLog(e.value);
      }}
      dataKey="id"
      tableStyle={{ minWidth: "30rem" }}
      paginator
      rows={5}
      paginatorTemplate={
        windowWidth > breakPointMobile
          ? "PrevPageLink PageLinks NextPageLink RowsPerPageDropdown CurrentPageReport"
          : "  FirstPageLink PrevPageLink JumpToPageInput NextPageLink LastPageLink"
      }
      rowsPerPageOptions={[5, 10, 25, 50]}
      emptyMessage="No logs found."
      isDataSelectable={isRowSelectable}
      rowClassName={rowClassName}
    >
      <Column field="date" header="Дата"></Column>
      <Column field="id" header="ID оборудования"></Column>
      <Column field="title" header="Сообщение"></Column>
      <Column field="userId" header="ID ответственного"></Column>
    </DataTable>
  );
};

export default EventLogsDatatable;
