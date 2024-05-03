import React, { ChangeEvent, useContext, useState,KeyboardEvent } from 'react' 
import { Box, Checkbox, Divider, IconButton, TextField, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import '@/components/TaskList.scss'
import { TasksContext } from '@/contexts/TaskListContext'
import { TypeNotification } from '@/types/model'
import Notification from '@/components/utils/NotificationAlert'

const TaskList: React.FC = () => {
  const [updateValue, setUpdateValue] = useState<string>('')
  const [notify, setNotify] = useState<TypeNotification>({ isOpen: false, type: "warning", message: "" })
  const {taskList, toggleTaskComplete, enableEdit, updateTask, deleteTask } = useContext(TasksContext)
  // check as complete 
  const handleCheckboxChange = (index: number) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { checked } = event.target;
    toggleTaskComplete(index, checked);
    checked ? setNotify({
      isOpen: true,
      message: 'Task completed👏',
      type: 'success'
    }):
    setNotify({
      isOpen: true,
      message: 'Task pending 💔',
      type: 'warning'
    })
  }
  // enable edit for task
  const handleEditEnable = (id: number, task:string) => {
    setUpdateValue(task)
    enableEdit(id)
  }
  // onKeyUp update task
  const updateEditValue = (id: number) => (event: KeyboardEvent<HTMLInputElement>) => {
    if(event.key === 'Enter') {
        updateTask(id, updateValue)
        setUpdateValue('')
        setNotify({
          isOpen: true,
          message: 'Task updated',
          type: 'success'
        })
    }
  }
    return (
        <Box className="task-list-container">
           <>
      {taskList && taskList.length > 0 ? (
        taskList.map((task, index) => (
          <div key={index}>
            <Box className="task-container">
              <Checkbox
                onChange={handleCheckboxChange(index)}
                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />
              <Box className="task-name">
                {task.editable? (
                  <TextField 
                  label="Add task"
                  variant="filled" 
                  value={updateValue}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => 
                    setUpdateValue(e.target.value)}
                  onKeyUp={updateEditValue(task.id)}
                  sx={{
                    '& .MuiFilledInput-root': {
                      backgroundColor: '#51E5FF',
                      fontSize: '18px',
                      fontWeight: '400',
                      '&:hover': {
                        backgroundColor: '#51E5FF'
                      },
                      '.Mui-focused': {
                        backgroundColor: '#51E5FF'
                      }
                    },
                  }}
                />
                ):
                (
                  <Typography
                  variant='h5'
                  color={'white'}
                  sx={{
                    textDecoration: task.isCompleted ? 'line-through': 'none'
                  }}
                >
                  {task.task}
                </Typography>
                )

                }
              </Box>
              <Box className="task-btn-container">
                <IconButton 
                  onClick={() => {
                    deleteTask(task.id)
                    setNotify({
                      isOpen: true,
                      message: 'Task deleted',
                      type: 'error'
                    })
                  }} 
                  style={{ backgroundColor: '#67737D' }}>
                  <DeleteIcon fontSize='medium' />
                </IconButton>
                <IconButton onClick={() => handleEditEnable(task.id, task.task)} style={{ backgroundColor: '#67737D' }}>
                  <EditNoteIcon fontSize='medium' />
                </IconButton>
              </Box>
            </Box>
            {index !== taskList.length - 1 && (
              <Divider variant="middle" sx={{ height: 2 }} color="#51E5FF" />
            )}
          </div>
        ))
      ) : (
        <Typography margin={'10px'} variant='h4' color={'white'}>No Tasks to show</Typography>
      )}
    </>
         <Notification notify={notify} setNotify={setNotify}/>
      </Box>
    )
}

export default TaskList