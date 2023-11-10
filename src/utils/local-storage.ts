import { IEventLogs } from "../redux/logs/types";

const itemInLSName = "EventLogs";

export const setLogsToLS = (logs: IEventLogs[], type: "new" | "change") => {
  let json;
  if (type === "new") {
    const logsInLS = getLogsFromLS();
    const newLogs: IEventLogs[] = [];
    logs.forEach((newLog) => {
      if (!logsInLS.find((oldLog) => oldLog.id === newLog.id)) {
        newLogs.push(newLog);
      }
    });

    json = JSON.stringify(newLogs.concat(logsInLS));
  } else {
    json = JSON.stringify(logs);
  }
  localStorage.setItem(itemInLSName, json);
};

export const getLogsFromLS = (): IEventLogs[] => {
  const data = localStorage.getItem(itemInLSName);
  const items = data ? JSON.parse(data) : [];
  return items;
};

export const changeLogFromLS = (logId: number) => {
  const logs = getLogsFromLS();
  logs.forEach((item) => {
    if (item.id === logId) {
      item.completed = true;
    }
  });
  setLogsToLS(logs, "change");
};
