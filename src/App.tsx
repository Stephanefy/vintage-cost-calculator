import TotalButton from "./components/button/TotalButton";
import ContributionsTable from "./components/table/contributions-table/ContributionsTable";
import TableList from "./components/table/worker-cost-table/WorkerCostTableList";
import IntermediateWorkerForm from "./components/worker-form/IntermediateWorterForm";
import { WorkerCountContextProvider } from "./context/WorkerCountContext";
import "./index.css";

import logo from "./logo.svg";
import reactLogo from "./react.svg";

export function App() {
  return (
    <div className="app">
      <div className="logo-container">
        <img src={logo} alt="Bun Logo" className="logo bun-logo" />
      </div>

      <h1>Coûts vendangeurs</h1>
      <WorkerCountContextProvider>
        <div className="worker-count-form-container">
          <div className="input-validation-group">
            <IntermediateWorkerForm />
            <TotalButton />
          </div>
          <div>
            <h3>Coûts travailleurs brut</h3>
            <TableList />
          </div>
          <div>
            <h3>Rappel tableaux des charges</h3>
            <ContributionsTable />
          </div>
        </div>
      </WorkerCountContextProvider>
    </div>
  );
}

export default App;
