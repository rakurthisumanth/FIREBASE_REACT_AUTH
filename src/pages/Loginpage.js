import React,{useState} from 'react'
import {auth} from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


const Loginpage=()=>{
    const [error,seterror]=useState(false)
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
   
    const Navigate=useNavigate()

    const handleLogin=(e)=>{
        e.preventDefault()
     signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      Navigate("/Home")
  })
  .catch((error) => {
    seterror(true)
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
            News
          </Typography>
        </Toolbar>
      </AppBar>
            <center>
            <Paper style={{width:"52vh",marginTop:"22vh",height:"62vh",backgroundColor:"lightcyan"}}>
   <h1 style={{color:"green"}}>Login</h1>
            <form onSubmit={handleLogin}>
                <TextField type="email" label='email'  variant="outlined" onChange={(e)=>setemail(e.target.value)}/><br/><br/><br/>
                <TextField type="password" label='password'  variant="outlined" onChange={(e)=>setpassword(e.target.value)}/><br/><br/><br/>
                <Button variant="contained" type="submit">Login</Button>
                {error && <p style={{color:"red"}}>Wrong email or password</p>}
            </form>
            <br/>
            <p style={{color:"pink"}}>Don't Have An Account <Button color="secondary" variant="contained" onClick={()=>Navigate("/Registration")}>Register</Button></p>
   </Paper>
            </center>


        </div>
    )
}
export default Loginpage