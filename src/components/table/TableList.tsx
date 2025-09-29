import { useWorkerCountContextProvider } from "@/context/WorkerCountContext";
import "./Table.css";
import TableListItem from "./TableListItem";

export default function TableList() {
  const { workers } = useWorkerCountContextProvider();

  console.log(workers);

  return (
    <table className="list-container">
      <thead>
        <tr>
          <th> vendangeur </th>
          <th> heures travaillées</th>
          <th> heures supplémentaires </th>
          <th> taux horaire</th>
        </tr>
      </thead>
      <tbody>
        {workers.map((w) => (
          <TableListItem worker={w} />
        ))}
      </tbody>
    </table>
  );
}
