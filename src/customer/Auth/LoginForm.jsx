import React from 'react'

import { Grid, TextField, Button, Box, Snackbar, Alert, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import {useNavigate} from 'react-router-dom'
const LoginForm = () => {

  const navigate=useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault()

    const data=new  FormData(event.currentTarget);

    const userData={
      firstname:data.get("firstName"),
      lastname:data.get("lastname"),
      email:data.get("email"),
      password:data.get("password")
    }

    console.log("userData ",userData)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
          <Grid item xs={12} >
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              fullWidth
              autoComplete="password"
            />
          </Grid>
          <Grid item xs={12} >
            <Button 
            className='bg-[#9155FD] w-full' 
            type='submit'
            variant='contained'
            size='large'
            sx={{padding:".8rem 0",bgcolor:'#9155FD'}}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className='flex jusify-center flex-col items-center'>
        <div className='py-3 flex item-center'>
          <p>if you  don't  have account?</p>
          <Button onClick={()=>navigate("/register")} className='ml-5' size='small' >Register</Button>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
