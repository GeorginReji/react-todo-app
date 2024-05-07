import { TextField } from "@mui/material"
import { ChangeEvent, FC, JSX } from "react"

type InputFieldProps = {
    taskInput: string,
    setTaskInput: React.Dispatch<React.SetStateAction<string>>
    handleKeyUp: (event: React.KeyboardEvent<HTMLInputElement>,  id?: number) => void
}

const InputField: FC<InputFieldProps> = ({taskInput, setTaskInput, handleKeyUp}): JSX.Element => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setTaskInput(event.target.value)
    }
    
    return (
      <TextField 
      label="Add task"
      variant="filled" 
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
      value={taskInput} 
      onChange={handleChange}
      onKeyUp={handleKeyUp}
    />
    )
}

export default InputField