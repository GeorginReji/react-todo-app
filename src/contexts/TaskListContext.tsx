import React, { useState, createContext, ReactNode } from 'react';
import { TodoItem } from '@/types/model'

// Define the type for the context value
type TaskListType = {
    taskList: TodoItem[];
    setTaskList: React.Dispatch<React.SetStateAction<TodoItem[]>>
    toggleTaskComplete: (index: number, checked: boolean) => void
    addTask: (task: string) => void
    updateTask: (id: number, task: string) => void
    enableEdit: (id: number) => void
};

// Create the context with an initial value
const TasksContext = createContext<TaskListType>({
  taskList: [],
  setTaskList: () => {},
  toggleTaskComplete: () => {},
  addTask: () => {},
  updateTask: () => {},
  enableEdit: () => {}
});


// Provider component
const TaskContextProvider: React.FC<{children: ReactNode}> = ({ children }): JSX.Element => {
  const [taskList, setTaskList] = useState<TodoItem[]>([]);
  //Update checkbox   
  const toggleTaskComplete = (index: number, checked: boolean) => {
    setTaskList(prevTaskList => {
      const updatedTaskList = [...prevTaskList];
      updatedTaskList[index] = {
        ...updatedTaskList[index],
        isCompleted: checked
      };
      return updatedTaskList;
    });
  }
  //Update edit mode
     const enableEdit = (id: number) => {
        const index = taskList.findIndex((item:TodoItem) => item.id === id)
        setTaskList(prevTaskList => { 
        const updatedTaskList = [...prevTaskList];
        updatedTaskList[index] = {
          ...updatedTaskList[index],
          editable: !prevTaskList[index].editable
        };
        return updatedTaskList;
      });
     }
  //create new task
  const addTask = (task: string)=> {
    const newTask: TodoItem = {
        id: taskList.length + 1,
        task: task,
        isCompleted: false,
        editable: false
    };
    setTaskList([...taskList, newTask])
  }
  //update new task
  const updateTask = (id:number, task:string) => {
    const index = taskList.findIndex((item:TodoItem) => item.id === id)
    setTaskList(prevTaskList => { 
        const updatedTaskList = [...prevTaskList];
        updatedTaskList[index] = {
          ...updatedTaskList[index],
          task: task,
          editable: false
        };
        return updatedTaskList;
      });
  }
const value = { 
                taskList, 
                setTaskList, 
                toggleTaskComplete, 
                addTask, 
                updateTask,
                enableEdit
            }

  return (
    <TasksContext.Provider value={value}>
      {children}
    </TasksContext.Provider>
  );
};

export {TasksContext, TaskContextProvider};
