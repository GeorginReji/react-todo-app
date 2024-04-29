import React from 'react' 
import { TodoItem } from '@/types/model'


const todoList: React.FC<{ items: TodoItem[]}> = ({ items }) => {
    return (
        <div className="todo-wrapper">
            {
                items.map(task => (
                <div className='todo-item'>
                    <span>{ task.id }</span>
                    <span>{ task.task }</span>
                    <span>{ task.isCompleted? 'true':'false' }</span>
                </div>
                ))
            }
        </div>
    )
}

export default todoList