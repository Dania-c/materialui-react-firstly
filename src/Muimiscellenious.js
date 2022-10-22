import { Button } from '@mui/material'

import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'



function Muimiscellenious() {


  return (
  <div>
    <div>
    <Button variant="text">Text</Button>
    <Button variant="contained">Contained</Button>
    <Button color="primary" variant="contained">Color primary theme</Button>
    <Button color="otherColor" variant="contained">otherColor  theme</Button>
    <Button variant="outlined">Outlined</Button>
    </div>
    <div>
    <Button color="secondary">color secondary from theme</Button>
<Button disabled>Disabled</Button>
<Button href="#text-buttons">Link</Button>
    </div>
    <div>
    <Button variant="outlined" startIcon={<DeleteIcon />}>
  Delete
</Button>
<Button variant="contained" endIcon={<SendIcon />}>
  Send
</Button>
    </div>
    <div>
        <Button 
        variant="contained"
        sx={{
            color:"#fff",
            margin:5,
            "&:hover":{
                backgroundColor:"lightblue",
                color:"#888",
            }
        }}
        >inline style</Button>
    </div>
</div>
  )
}

export default Muimiscellenious