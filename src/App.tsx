import React from "react";
import Header from "./components/header";
import EventLogsDatatable from "./pages/event-logs-datatable";

const App: React.FC = () => {
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
