import { 
    useState,
    KeyboardEvent,
    FC,
    ChangeEvent
 } from "react"
import { TodoItem } from "../types/model"
import TodoList from '../components/TodoList'


const TodoApp: FC = () => {
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
        <div className="main-app">
            <input 
                type="text" 
                placeholder="add your task..." 
                value={taskInput} 
                onChange={handleChange}
                onKeyUp={handleAddTask}
            />
            <TodoList items={tasksList}/>
        </div>
    )
}

export default TodoApp