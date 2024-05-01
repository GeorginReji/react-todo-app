import React from 'react' 
// import { TodoItem } from '@/types/model'
import { Box, Divider, IconButton, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';

const TaskList: React.FC = () => {
    return (
        <Box
        my={4}
        width={600}
        sx={{ border: '4px solid', borderColor: '#51E5FF', borderRadius: '10px' }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          p={2}
        >
            <Typography variant='h5' color={'white'}>
              Add nav bar
            </Typography>
          <Box
            display="flex"
            gap="1rem"
            width="30%"
            justifyContent="flex-end"
          >
            <IconButton style={{ backgroundColor: '#67737D' }}>
              <DeleteIcon fontSize='medium' />
            </IconButton>
            <IconButton style={{ backgroundColor: '#67737D' }}>
              <EditNoteIcon fontSize='medium' />
            </IconButton>
          </Box>
        </Box>
        <Divider variant="middle" sx={{ height: 2 }} color="#51E5FF" />
         <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          p={2}
        >
            <Typography variant='h5' color={'white'}>
              Add nav bar
            </Typography>
          <Box
            display="flex"
            gap="1rem"
            width="30%"
            justifyContent="flex-end"
          >
            <IconButton style={{ backgroundColor: '#67737D' }}>
              <DeleteIcon fontSize='medium' />
            </IconButton>
            <IconButton style={{ backgroundColor: '#67737D' }}>
              <EditNoteIcon fontSize='medium' />
            </IconButton>
          </Box>
        </Box>
        <Divider variant="middle" sx={{ height: 2 }} color="#51E5FF" />
      </Box>
    )
}

export default TaskList