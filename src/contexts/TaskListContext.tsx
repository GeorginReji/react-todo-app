import React, { useState, createContext, ReactNode } from 'react';
import { TodoItem } from '@/types/model'

// Define the type for the context value
type TaskListType = {
    taskList: TodoItem[];
    setTaskList: React.Dispatch<React.SetStateAction<TodoItem[]>>
    toggleTaskComplete: (index: number, checked: boolean) => void
};

// Create the context with an initial value
const TasksContext = createContext<TaskListType>({
  taskList: [],
  setTaskList: () => {},
  toggleTaskComplete: () => {},
});


// Provider component
const TaskContextProvider: React.FC<{children: ReactNode}> = ({ children }): JSX.Element => {
  const [taskList, setTaskList] = useState<TodoItem[]>([]);

  const toggleTaskComplete = (index: number) => {
    setTaskList(prevTaskList => {
      const updatedTaskList = [...prevTaskList];
      updatedTaskList[index] = {
        ...updatedTaskList[index],
        isCompleted: !updatedTaskList[index].isCompleted // Toggle completion status
      };
      return updatedTaskList;
    });
  }

  return (
    <TasksContext.Provider value={{ taskList, setTaskList, toggleTaskComplete }}>
      {children}
    </TasksContext.Provider>
  );
};

export {TasksContext, TaskContextProvider};
