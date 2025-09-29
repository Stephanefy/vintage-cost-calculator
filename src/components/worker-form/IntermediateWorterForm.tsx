import { useEffect, useState } from 'react';
import { useWorkerCountContextProvider } from "@/context/WorkerCountContext";
import './IntermediateWorkerForm.css'

function genreateRandomId() {
    return crypto.randomUUID()
}

export default function IntermediateWorkerForm() {

    const [workerName, setWorkerName] = useState<string>("");

    const { workers, setWorkers } = useWorkerCountContextProvider();


    const addWorker = () => {
        const newWorker = {
            id: genreateRandomId(),
            name: workerName,
            baseHours: 0,
            overtimeHours: 0,
            hourRate: 12.0
        }
        const newWorkers = [...workers, newWorker]

        setWorkers(newWorkers)
    }

    useEffect(() => {
        console.log(workerName)
    }, [workerName])

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {

        if (event.code === 'Enter') {
            event.preventDefault();
            addWorker()
            setWorkerName("")
        }

    }


    return (

        <div className="intermediate-form-container">
            <input
                className="worker-name-input"
                onKeyDown={handleKeyDown}
                type="text"
                placeholder="Prénom du vendangeur"
                value={workerName}
                onChange={(e) => setWorkerName(e.target.value)}
            />
            <button className="add-worker-btn" disabled={!workerName} onClick={() => addWorker()}>
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Add"
                    style={{ verticalAlign: 'middle' }}
                >
                    <rect x="9" y="4" width="2" height="12" rx="1" fill="currentColor" />
                    <rect x="4" y="9" width="12" height="2" rx="1" fill="currentColor" />
                </svg>
            </button>
        </div>
    )


}