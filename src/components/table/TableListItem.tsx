import { useId, useState, useRef } from "react";
import {
  useWorkerCountContextProvider,
  type Worker,
} from "@/context/WorkerCountContext";
import './Table.css'
import CellInput from "./cell-input/CellInput";

interface Props {
  worker: Worker;
}

export default function TableListItem({ worker }: Props) {
  
  const [editingCells, setEditingCells] = useState<Set<string>>(new Set())  

  



  const addEditingCell = (cellId: string) => {
    const newEditingCells = new Set(editingCells)
    newEditingCells.add(cellId)
    setEditingCells(newEditingCells);
  }

  const removeEditingCell = (cellId: string) => {
    const newEditingCells = new Set(editingCells)
    newEditingCells.delete(cellId)
    setEditingCells(newEditingCells);
  }

  const baseHoursInputId = useId();
  const overtimeHoursInputId = useId();
  const hourRateInputId = useId();


  return (
    <tr>
      <th>{worker.name}</th>
      <td 
      id={baseHoursInputId}
      onDoubleClick={(e: React.MouseEvent<HTMLTableCellElement>) => {
        addEditingCell(e.currentTarget.id)
      }}>{
        editingCells.has(baseHoursInputId) ? <CellInput type="baseHours" removeEditingCell={removeEditingCell} workerId={worker.id} inputId={baseHoursInputId}/> : worker.baseHours
      }</td>
      <td 
      id={overtimeHoursInputId}
      onDoubleClick={(e: React.MouseEvent<HTMLTableCellElement>) => {
        addEditingCell(e.currentTarget.id)
      }}>{
        editingCells.has(overtimeHoursInputId) ? <CellInput type="overtimeHours" removeEditingCell={removeEditingCell} workerId={worker.id} inputId={overtimeHoursInputId}/> : worker.overtimeHours
      }</td>
      <td 
      id={hourRateInputId}
      onDoubleClick={(e) => {
        addEditingCell(e.currentTarget.id)
      }}>{
        editingCells.has(hourRateInputId) ? <CellInput type="hourRate" removeEditingCell={removeEditingCell} workerId={worker.id} inputId={hourRateInputId}/> : worker.hourRate
      }</td>
    </tr>
  );
}
