import TableList from "./components/table/TableList";
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
          <IntermediateWorkerForm />
          <TableList />
        </div>
      </WorkerCountContextProvider>
    </div>
  );
}

export default App;
