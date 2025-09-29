import { useState, createContext, type PropsWithChildren, type SetStateAction, type Dispatch, useContext } from "react";

export type Worker = {
    id: string
    name: string
    baseHours: number,
    overtimeHours: number,
    hourRate: number
}

type WorkerContextvalue = {
    workers: Worker[];
    setWorkers: Dispatch<SetStateAction<Worker[]>>
}

const WorkerCountContext = createContext<WorkerContextvalue | undefined>(undefined);




export const WorkerCountContextProvider = ({ children }: PropsWithChildren) => {

    const [workers, setWorkers] = useState<Worker[]>([]);


    return (
        <WorkerCountContext.Provider value={{ workers, setWorkers }}>
            {children}
        </WorkerCountContext.Provider>
    )
}



export const useWorkerCountContextProvider = () => {

    const ctx = useContext(WorkerCountContext);
    if (!ctx) throw new Error('this context must be used within a WorkerCountContextProvider');

    return ctx;

}