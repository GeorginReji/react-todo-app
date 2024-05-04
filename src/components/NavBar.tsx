import { FC, JSX, useContext } from "react"
import SettingsIcon from '@mui/icons-material/Settings'
import '@/components/NavBar.scss'
import { getPendingTasks, getFormattedDate } from '@/utils/utils'
import { TasksContext } from "@/contexts/TaskListContext"

const NavBar: FC = (): JSX.Element => {
    const { taskList } = useContext(TasksContext)
    return (
        <div className="navbar-container">
            <div className="item date-container">
                <span className="current-date">
                    {getFormattedDate()}
                </span>
                <span className="active-task">
                    Task pending {getPendingTasks(taskList)}
                </span>
            </div>
            <div className="item title">
                To Do List
            </div>
            <div className="item settings">
                <SettingsIcon fontSize="large" />
            </div>
        </div>
    )
}
export default NavBar