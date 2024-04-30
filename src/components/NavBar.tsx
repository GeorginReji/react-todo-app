import { FC, JSX } from "react"
import SettingsIcon from '@mui/icons-material/Settings'
import '@/components/NavBar.scss'

const NavBar: FC = (): JSX.Element => {
    return (
        <div className="navbar-container">
            <div className="item date-container">
                <span className="current-date">
                    October, 13th
                </span>
                <span className="active-task">
                    3 Active tasks
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