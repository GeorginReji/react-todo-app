import React, { useContext, useState,KeyboardEvent } from 'react' 
import { Box, Checkbox, Divider, IconButton, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import '@/components/TaskList.scss'
import { TasksContext } from '@/contexts/TaskListContext'
import { TypeNotification, TypeConfirmDialog } from '@/types/model'
import Notification from '@/components/utils/NotificationAlert'
import ConfirmationDialog from '@/components/utils/ConfirmDialog'
import InputField from '@/components/utils/InputField'


const TaskList: React.FC = () => {
  const [updateValue, setUpdateValue] = useState<string>('')
  const [notify, setNotify] = useState<TypeNotification>({ isOpen: false, type: "warning", message: "" })
  const [confirmDialog, setConfirmDialog] = useState<TypeConfirmDialog>({isOpen: false, title: '', description: '', onConfirm: () =>{}})
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
  const handleDelete = (id: number) => {
    deleteTask(id)
    setNotify({
      isOpen: true,
      message: 'Task deleted',
      type: 'error'
    })
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false
    })
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
                  <InputField taskInput={updateValue} setTaskInput={setUpdateValue} handleKeyUp={updateEditValue(task.id)} />
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
                  onClick={() => {setConfirmDialog({
                    isOpen: true,
                    title: 'Delete Task',
                    description: 'Do you want to permanently remove the task',
                    onConfirm: () => handleDelete(task.id)
                  })}} 
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
         <ConfirmationDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog}  />
      </Box>
    )
}

export default TaskList