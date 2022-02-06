import React from 'react'
import { Grid,Paper } from '@mui/material'

const Login=()=>{
    const paperStyle={padding :20};
    return (
       <Grid>
           <Paper elevation={10} style={paperStyle}>
               Sign In
           </Paper>
       </Grid>
    )
}

export default Login
