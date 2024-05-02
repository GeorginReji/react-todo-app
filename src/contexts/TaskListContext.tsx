import React, { useState, createContext, ReactNode } from 'react';
import { TodoItem } from '@/types/model'

// Define the type for the context value
type TaskListType = {
    taskList: TodoItem[];
    setTaskList: React.Dispatch<React.SetStateAction<TodoItem[]>>;
};

// Create the context with an initial value
const TasksContext = createContext<TaskListType>({
  taskList: [],
  setTaskList: () => {},
});

// Provider component
const TaskContextProvider: React.FC<{children: ReactNode}> = ({ children }): JSX.Element => {
  const [taskList, setTaskList] = useState<TodoItem[]>([]);

  return (
    <TasksContext.Provider value={{ taskList, setTaskList }}>
      {children}
    </TasksContext.Provider>
  );
};

export {TasksContext, TaskContextProvider};
