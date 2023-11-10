import React, { useEffect } from "react";
import Header from "./components/header";
import EventLogsDatatable from "./pages/event-logs-datatable";
import { getWindowSize } from "./utils/get-window-width";
import { useAppDispatch } from "./redux/store";
import { setWindowWidth } from "./redux/window/windowSlider";

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    function handleWindowResize() {
      dispatch(setWindowWidth(getWindowSize()));
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <main>
        <EventLogsDatatable />
      </main>
    </div>
  );
};

export default App;
