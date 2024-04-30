import { FC, JSX } from "react"
import NavBar from '@/components/NavBar'


const AppLayout: FC = (): JSX.Element => {
    return (
        <div className="app-layout">
            <NavBar />
        </div>
    )
}

export default AppLayout