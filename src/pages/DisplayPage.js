import React,{useState,useEffect} from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'





const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));


  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));





const Display=()=>{
    const [data,setdata]=useState([])
    const Navigate=useNavigate()
    useEffect(()=>{
        const fetchData = async ()=>{
            let list=[]
            try{
                const querySnapshot = await getDocs(collection(db,"info"));
                querySnapshot.forEach((doc) => {
                    list.push({id:doc.id,...doc.data()})  
})
     setdata(list)
            }catch(err){
                console.log(err)
            }
        }
        fetchData()
    },[])
    console.log(data)
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
            App
          </Typography>
          <Button color="secondary" variant="contained" style={{marginRight:"2vh"}}   onClick={()=>{Navigate("/Home")}}>Form</Button>
          <Button color="secondary" variant="contained" onClick={()=>{Navigate("/")}}>LogOut</Button>
        </Toolbar>
      </AppBar>
            <h1>Display Data </h1>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>First Name</StyledTableCell>
            <StyledTableCell align="right">Last Name</StyledTableCell>
            <StyledTableCell align="right">Address&nbsp;(g)</StyledTableCell>  
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.fname}
              </StyledTableCell>
              <StyledTableCell align="right">{row.lname}</StyledTableCell>
              <StyledTableCell align="right">{row.address}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        </div>
    )
}
export default Display