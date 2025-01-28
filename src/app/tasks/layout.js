'use client'

import { openCreateTaskPopup } from "@/store/slices/modals"
import { Button } from "@mantine/core"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import CreateTaskPopup from "./components/createTaskPopup"
import DeletePopUp from "./components/deletePopup"
import StatCard from "./components/statCard"
import TasksTable from "./components/tasksTable"

const statsData = [
    {
        id: 1,
        title: "Total Tasks",
        stat: 20,
    },
    {
        id: 2,
        title: "Completed",
        stat: 10,
    },
    {
        id: 3,
        title: "Pending",
        stat: 10,
    },
];

function TasksLayout({ children }) {
    const dispatch = useDispatch()
    const router = useRouter()
    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            router.push("/auth/signin"); // Redirect to login if no token
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token')
        router.push('auth/signin')
    }

    return (<div>
        <div className='bg-blue-500 h-[5.5rem] flex justify-between z-50 items-center p-2 sticky top-0 pl-10 mb-10'>
            <h1 className="text-xl font-semibold flex gap-x-2">TasKING <img src="/assets/icons/crown.svg" className="h-6 w-6" alt='crown'></img></h1>
            <div className="flex-auto px-10 ml-0 relative pt-24 pb-5 w-full">
                <div className="flex items-center space-x-5 justify-start absolute transform -translate-y-1/2 left-1/2 -translate-x-1/2 z-50 mt-5">
                    {statsData.map((s) => (
                        <StatCard key={s.id} title={s.title} stat={s.stat} />
                    ))}
                </div>
            </div>
            <Button onClick={handleLogout}>Logout</Button>
        </div>
        {children}
        <div className="flex justify-end p-4"><Button onClick={() => dispatch(openCreateTaskPopup())}> + Create Task</Button></div>

        <TasksTable />
        <CreateTaskPopup />
        <DeletePopUp />
    </div>
    )
}

export default TasksLayout
