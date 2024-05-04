import { 
    useState,
    KeyboardEvent,
    FC,
    ChangeEvent,
    useContext
 } from "react"
import { Button, TextField } from "@mui/material"
import "@/components/AddTask.scss"
import { TasksContext } from '@/contexts/TaskListContext';


const AddTask: FC = () => {
  const { addTask } = useContext(TasksContext)
    const [taskInput, setTaskInput] = useState<string>('')
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskInput(event.target.value)
    }
    const handleAddTask = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter') {
            addTask(taskInput)
            setTaskInput(''); 
        }
    }
    const handleOnClick = () => {
      addTask(taskInput)
      setTaskInput('')
    }
    return (
        <div className="add-task">
            <TextField 
              label="Add task"
              variant="filled" 
              sx={{
                '& .MuiFilledInput-root': {
                  backgroundColor: '#51E5FF',
                  fontSize: '18px',
                  fontWeight: '400',
                },
                '.MUI-focused': {
                  backgroundColor: '#51E5FF'
                },
                'MuiFilledInput-input': {
                  backgroundColor: '#51E5FF'
                }
              }}
              value={taskInput} 
              onChange={handleChange}
              onKeyUp={handleAddTask}
            />
            <Button className="btn-add" onClick={handleOnClick} variant="contained">Add</Button>
        </div>
    )
}

export default AddTask