import { 
    useState,
    KeyboardEvent,
    FC,
    ChangeEvent,
    useContext
 } from "react"
import { TodoItem } from "../types/model"
import { Button, TextField } from "@mui/material"
import "@/components/AddTask.scss"
import { TasksContext } from '@/contexts/TaskListContext';


const AddTask: FC = () => {
  const { taskList, setTaskList} = useContext(TasksContext)
    const [taskInput, setTaskInput] = useState<string>('')
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskInput(event.target.value)
    }
    const handleAddTask = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter') {
            const task: TodoItem = {
                id: taskList.length + 1,
                task: taskInput,
                isCompleted: false
            };

            setTaskList([...taskList, task]);
            setTaskInput(''); 
        }
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
                  '.MUI-focused': {
                    backgroundColor: '#51E5FF'
                  }
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