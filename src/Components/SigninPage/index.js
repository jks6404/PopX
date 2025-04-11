import React from 'react'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./styles.css"


function SignInPage() {
    const navigate = useNavigate();
    const [invalid,setInvalid] = useState(false);

    function verify(){
       let username = document.getElementById("outlined-email").value
       let password = document.getElementById("outlined-password").value
       console.log(username,password)
       if(username==="" || password===""){
        alert("Email or Password cannot be empty!")
        return
       }
       if(localStorage.getItem("userData")===null){
        alert("No users in database please go back!!!")
        return
       }
       else{
        console.log("inside else")
        let get = JSON.parse(localStorage.getItem("userData"))
        let tempArr = [...get];
        tempArr.forEach((item)=>{
            if(item.email === username && item.password === password){
                console.log("found user")
                localStorage.setItem("userName",item.name)
                localStorage.setItem("userEmail",item.email)
                setInvalid(true);
                navigate("/Profile")
                
            }
            
        })
        if(invalid){
        alert("invalid username or password!!!")
        return;
        }
       }
    }


  return (
    <div className='signin-main'>
    <div className='signin-container'>
        <h2>Signin to your <br/>PopX account </h2>
        <p>Loerm ipsum dolor sit amet,<br/>consectetur adipiscing elit</p>
        <Box
        component="form"
        marginTop="1rem"
        display='flex'
        flexDirection='column'
        sx={{
        '& .MuiTextField-root': { margin: 2, width: '98%',marginLeft:1},
        }}
        noValidate
        autoComplete="off"
        >
        <TextField
          required
          focused
          color='secondary'
          id="outlined-email"
          label="Email Address"
          type="email"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          required
          focused
          color='secondary'
          id="outlined-password"
          label="Password"
          type="password"
          
          InputLabelProps={{
            shrink: true,
            
          }}
        />
        </Box>
        <button className='signin-btn' onClick={()=> verify()}>Login</button>
    </div>
    </div>
  )
}

export default SignInPage