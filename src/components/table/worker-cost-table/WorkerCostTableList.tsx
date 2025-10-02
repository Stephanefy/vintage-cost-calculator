import { useWorkerCountContextProvider } from "@/context/WorkerCountContext";
import "./WorkerCostTable.css";
import TableListItem from "./WorkerCostTableListItem";

export default function TableList() {
  const { workers } = useWorkerCountContextProvider();

  return (
    <table className="list-container">
      <thead>
        <tr>
          <th> vendangeur </th>
          <th> heures travaillées</th>
          <th> heures supplémentaires </th>
          <th> taux horaire</th>
          <th> coeff heures supp</th>
          <th> sous-total </th>
        </tr>
      </thead>
      <tbody>
        {workers.map((w) => (
          <TableListItem key={w.id} worker={w} />
        ))}
      </tbody>
    </table>
  );
}
