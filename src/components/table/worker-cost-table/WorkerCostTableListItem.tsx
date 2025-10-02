import { useId, useState, useRef } from "react";
import {
  useWorkerCountContextProvider,
  type Worker,
} from "@/context/WorkerCountContext";
import './WorkerCostTable.css'
import CellInput from "../cell-input/CellInput";

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
  const overtimeCoeffInputId = useId();


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
      <td
      className={`${worker.overtimeHours === 0 && 'disabled-cell'}`}
      id={overtimeCoeffInputId}
      aria-disabled={worker.overtimeHours === 0 ? true : false}
      onDoubleClick={(e) => {
        addEditingCell(e.currentTarget.id)
      }}>{
        editingCells.has(overtimeCoeffInputId) ? <CellInput type="overtimeCoeff" removeEditingCell={removeEditingCell} workerId={worker.id} inputId={overtimeCoeffInputId}/> : worker.overtimeCoeff
      }
      </td>
      <td>
        {worker.total}€
      </td>
    </tr>
  );
}
