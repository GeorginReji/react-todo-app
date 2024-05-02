import React, { useContext } from 'react' 
// import { TodoItem } from '@/types/model'
import { Box, Checkbox, Divider, IconButton, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import '@/components/TaskList.scss'
import { TasksContext } from '@/contexts/TaskListContext';

const TaskList: React.FC = () => {
  const {taskList} = useContext(TasksContext)
    return (
        <Box className="task-list-container">
           <>
      {taskList && taskList.length > 0 ? (
        taskList.map((task, index) => (
          <div key={index}>
            <Box className="task-container">
              <Checkbox
                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />
              <Box className="task-name">
                <Typography variant='h5' color={'white'}>
                  {task.task}
                </Typography>
              </Box>
              <Box className="task-btn-container">
                <IconButton style={{ backgroundColor: '#67737D' }}>
                  <DeleteIcon fontSize='medium' />
                </IconButton>
                <IconButton style={{ backgroundColor: '#67737D' }}>
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
         
      </Box>
    )
}

export default TaskList