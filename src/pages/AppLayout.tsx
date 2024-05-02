import { FC, JSX } from "react"
import NavBar from '@/components/NavBar'
import AddTask from '@/components/AddTask'
import TaskList from "@/components/TaskList"
import { TaskContextProvider } from '@/contexts/TaskListContext' 
import '@/pages/AppLayout.scss'

const AppLayout: FC = (): JSX.Element => {
    return (
        <TaskContextProvider>
            <div className="app-layout">
                <NavBar />
                <div className="todo-container">
                    <AddTask />
                    <TaskList />
                </div>
            </div>
        </TaskContextProvider>
    )
}

export default AppLayout