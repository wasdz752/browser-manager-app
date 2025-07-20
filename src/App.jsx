import ExtensionsList from "../components/ExtensionsList";
import Header from "../components/Header";
import Toast from "../components/Toast";
import AppContext from "../contexts/AppContext";
import "./App.css";
import { useContext, useState } from "react";

function App() {
  const [statusFilter, setStatusFilter] = useState("all");
  const { toast } = useContext(AppContext);

  return (
    <div className="app-container">
      <Header />

      <div className="main-content d-flex-column align-items-center">
          <div className="main-content-inner d-flex-row space-between">
            <h1 className="text-bold text-white text-bold">Extensions List</h1>
            
            <div className="filter-container d-flex-row align-items-center">
              <button className={`filter-button text-white text-bold ${statusFilter === "all" ? "active" : ""}`} onClick={() => setStatusFilter("all")}>All</button>
              <button className={`filter-button text-white text-bold ${statusFilter === "enabled" ? "active" : ""}`} onClick={() => setStatusFilter("enabled")}>Enabled</button>
              <button className={`filter-button text-white text-bold ${statusFilter === "disabled" ? "active" : ""}`} onClick={() => setStatusFilter("disabled")}>Disabled</button>
            </div>
          </div>

          <ExtensionsList statusFilter={statusFilter} />
          <Toast open={toast.open} message={toast.message}/>
      </div>
    </div>)
}

export default App;