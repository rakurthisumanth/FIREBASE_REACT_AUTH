import React,{useState} from 'react'
import {auth} from '../firebase'
import { useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


const Registration=()=>{
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const Navigate=useNavigate()
    const handleLogin=(e)=>{
        e.preventDefault()
 createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    console.log(error)
  });


    }
    return(
        <div>
          <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            APP
          </Typography>
        </Toolbar>
      </AppBar>
                 <center>
               <Paper style={{width:"52vh",marginTop:"22vh",height:"62vh",backgroundColor:"lightcyan"}}>
            <h1 style={{color:"green"}}> Registration</h1>
            <form onSubmit={handleLogin}>
                <TextField type="email" placeholder='email' onChange={(e)=>setemail(e.target.value)}/><br/><br/><br/>
                <TextField type="password" placeholder='password' onChange={(e)=>setpassword(e.target.value)}/><br/><br/><br/>
                <Button variant="contained"  type='submit'>Register</Button>
            </form>
            <br/>
            <p style={{color:"pink"}}>Already Create A Account <Button color="secondary" variant="contained" onClick={()=>{Navigate("/")}}>login</Button> </p>
          </Paper>
          </center>
        </div>
        
    )
}
export default Registration