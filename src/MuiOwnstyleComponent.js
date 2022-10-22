import { Button, styled } from '@mui/material'

import React from 'react'


function MuiOwnstyleComponent() {
const DandounRedButton = styled(Button)({
 
            margin:5,
            backgroundColor:"red",
            color:"white",
            "&:hover":{
                backgroundColor:"lightred",
                color:"#888",
            }
})
    
  return (
  <div>
   
    
    <div>
        <DandounRedButton>comp styled separetly</DandounRedButton>
    </div>
</div>
  )
}

export default MuiOwnstyleComponent