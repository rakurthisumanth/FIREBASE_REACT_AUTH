import React,{useState} from 'react'
import { db } from '../firebase'
import { addDoc,collection,doc,serverTimestamp, setDoc } from 'firebase/firestore'
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom'


const Home=()=>{
    const [data,setdata]=useState({
        fname:"",
        lname:"",
        address:""
    })
    const Navigate=useNavigate()


    const HandleChange=(e)=>{
       
    setdata({...data,
     [e.target.name]:e.target.value
   }
   )
   console.log(data.fname,data.lname,data.address)

    }

    const handleAdd=async(e)=>{
        e.preventDefault()
        await addDoc(collection(db,"info"),{
            ...data,
            timeStamp:serverTimestamp()
        })

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
          <Button color="secondary" variant="contained" onClick={()=>{Navigate("/Display")}}>Display</Button>
        </Toolbar>
      </AppBar>
            <center>
               <Paper style={{width:"92vh",marginTop:"12vh",height:"62vh",backgroundColor:"lightcyan"}}>
            <h1>Form</h1><br/><br/><br/>
            <form onSubmit={handleAdd} >
                <TextField type="text" placeholder='firstname' name="fname" onChange={HandleChange}/><br/><br/>
                <TextField type="password" placeholder='lastname' name="lname"   onChange={HandleChange}/><br/><br/>
                <TextField type="password" placeholder='address' name="address"  onChange={HandleChange}/><br/><br/>

                <Button variant="contained" type='submit'>Add</Button>
            </form>
            </Paper>
            </center>
            
        </div>
    )
}
export default Home