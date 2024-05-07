import { 
    useState,
    KeyboardEvent,
    FC,
    useContext
 } from "react"
import "@/components/AddTask.scss"
import { TasksContext } from '@/contexts/TaskListContext';
import InputField from "@/components/utils/InputField";
import { Button } from "@mui/material";


const AddTask: FC = () => {
  const { addTask } = useContext(TasksContext)
    const [taskInput, setTaskInput] = useState<string>('')
    const handleAddTask = (event: KeyboardEvent<HTMLInputElement>) => {     
        if(event.key === 'Enter') {
            addTask(taskInput)
            setTaskInput('')
        }
    }
    const handleOnClick = () => {
      addTask(taskInput)
      setTaskInput('')
    }
    return (
        <div className="add-task">
           <InputField taskInput={taskInput} setTaskInput={setTaskInput} handleKeyUp={handleAddTask}/>
            <Button className="btn-add" onClick={handleOnClick} variant="contained">Add</Button>
        </div>
    )
}

export default AddTask