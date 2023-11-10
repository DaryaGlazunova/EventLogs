import React from "react";
import Header from "./components/header";
import EventLogsDatatable from "./pages/event-logs-datatable";
import EventLogsCards from "./pages/event-logs-cards";

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <EventLogsDatatable />
        {/* <EventLogsCards /> */}
      </main>
    </div>
  );
};

export default App;
