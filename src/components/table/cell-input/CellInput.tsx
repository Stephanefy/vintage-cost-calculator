import { useState, useRef, useEffect } from "react";
import "./CellInput.css";
import { useWorkerCountContextProvider } from "@/context/WorkerCountContext";

interface CellInputProps {
    type: "baseHours" | "overtimeHours" | "hourRate";
    workerId: string;
    inputId: string;
    removeEditingCell: (cellId: string) => void;
}

export default function CellInput({ type, workerId, inputId, removeEditingCell }: CellInputProps) {

    const { workers, setWorkers } = useWorkerCountContextProvider();

    const inputRef = useRef<HTMLInputElement>(null);


    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [])

    const [value, setValue] = useState<string>("");

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            removeEditingCell(inputId);

            if (isNaN(Number(value))) {
                return;
            }

            switch (type) {
                case "baseHours":
                    setWorkers(workers.map(worker => worker.id === workerId ? { ...worker, baseHours: Number(value) } : worker));
                    break;
                case "overtimeHours":
                    setWorkers(workers.map(worker => worker.id === workerId ? { ...worker, overtimeHours: Number(value) } : worker));
                    break;
                case "hourRate":
                    setWorkers(workers.map(worker => worker.id === workerId ? { ...worker, hourRate: Number(value) } : worker));
                    break;
            }
        }
    }

    return (
        <input 
            ref={inputRef}
            onKeyDown={handleKeyDown}
            className="cell-input"
            type="text" 
            id={inputId} 
            value={value} 
            onChange={(e) => setValue(e.target.value)}
            onBlur={() => {
                removeEditingCell(inputId);
            }}
        />
    )
}