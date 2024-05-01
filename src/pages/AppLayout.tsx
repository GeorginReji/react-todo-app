import { FC, JSX } from "react"
import NavBar from '@/components/NavBar'
import AddTask from '@/components/AddTask'
import TaskList from "@/components/TaskList"
import '@/pages/AppLayout.scss'

const AppLayout: FC = (): JSX.Element => {
    return (
        <div className="app-layout">
            <NavBar />
            <div className="todo-container">
                <AddTask />
                <TaskList />
            </div>
        </div>
    )
}

export default AppLayout