import { Button, styled } from '@mui/material'

import React from 'react'


function MuiOwnstyleComponentTHEMED() {
const DanRedButton = styled(Button)(({theme})=>({
 
            margin:5,
            backgroundColor:theme.palette.redColorTheme.main,
            color:"black",
            "&:hover":{
                backgroundColor:"lightred",
                color:"#888",
            }
}))
    
  return (
  <div>
   
    
    <div>
        <DanRedButton>comp styled sep/theme</DanRedButton>
    </div>
</div>
  )
}

export default MuiOwnstyleComponentTHEMED