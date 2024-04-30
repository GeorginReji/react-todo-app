import { 
    useState,
    KeyboardEvent,
    FC,
    ChangeEvent
 } from "react"
import { TodoItem } from "../types/model"
import { Button, TextField } from "@mui/material"
import "@/components/AddTask.scss"


const AddTask: FC = () => {
    const [tasksList, setTasksList] = useState<TodoItem[]>([])
    const [taskInput, setTaskInput] = useState<string>('')
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskInput(event.target.value)
    }
    const handleAddTask = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter') {
            const task: TodoItem = {
                id: tasksList.length + 1,
                task: taskInput,
                isCompleted: false
            };

            setTasksList([...tasksList, task]);
            setTaskInput(''); // Clear input after adding task
        }
    }
    return (
        <div className="add-task">
            <TextField 
              label="Add task"
              variant="outlined" 
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: '#51E5FF',
                  fontSize: '18px',
                  fontWeight: '400',
                },
                
              }}
              value={taskInput} 
              onChange={handleChange}
              onKeyUp={handleAddTask}
            />
            <Button className="btn-add" variant="contained">Add</Button>
        </div>
    )
}

export default AddTask