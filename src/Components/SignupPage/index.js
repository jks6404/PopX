import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./styles.css"
import { grey } from '@mui/material/colors';
import Profile from '../Profile';

function SignUpPage() {

const[userName,setUserName] = useState("");
const[userEmail,setUserEmail] = useState("");

const navigate = useNavigate();

function storeAndNavigate(){
    console.log("clicked")
    let name = document.getElementById("outlined-name").value;
    let number = document.getElementById("outlined-number").value;
    let email = document.getElementById("outlined-email").value;
    let password = document.getElementById("outlined-password").value;
    let company = document.getElementById("outlined-company").value;

    

    if(name==="" || number==="" || email==="" || password===""){
        alert("fill required feilds")
        return;
    }
    else{
        let tempData = {name:name,email:email,password:password}
        let userArray = [];
        userArray.push(tempData);
        setUserName(name);
        setUserEmail(email);
        localStorage.setItem("userName",name)
        localStorage.setItem("userEmail",email)

        if(localStorage.getItem("userData")===null){
            localStorage.setItem("userData",JSON.stringify(userArray))
            console.log("data not found")
            navigate("/Profile")
            return;
        }
        else{
            let get = JSON.parse(localStorage.getItem("userData"));
            console.log(get);
            console.log("found data")
            let tempArr = [...get];
            
            tempArr.push(tempData);
            console.log(tempArr)
            localStorage.setItem("userData",JSON.stringify(tempArr));
            navigate("/Profile")
        }
    }
}

    
return (
    <div className='signup-container'>
        <h2>Create your<br/>PopX account</h2>
        <Box
        component="form"
        marginTop="1rem"
        display='flex'
        flexDirection='column'
        sx={{
        '& .MuiTextField-root': { margin: 2, width: '98%',marginLeft:1,color:grey},
        }}
        noValidate
        autoComplete="off"
        >
        <TextField
        required
        id="outlined-name"
        label="Full Name"
        type="text"
        InputLabelProps={{
            shrink: true,
        }}
        />
        <TextField
        required
        id="outlined-number"
        label="Phone Number"
        type="text"
        
        InputLabelProps={{
            shrink: true,
            
        }}
        />
        <TextField
        required
        id="outlined-email"
        label="Email address"
        type="email"
        
        InputLabelProps={{
            shrink: true,
            
        }}
        />
        <TextField
        required
        id="outlined-password"
        label="Password"
        type="password"
        
        InputLabelProps={{
            shrink: true,
            
        }}
        />
        <TextField
        id="outlined-company"
        label="Company name"
        type="text"
        
        InputLabelProps={{
            shrink: true,
            
        }}
        />
        </Box>
        <form>
        <label for="agency" className='agency-label'>Are you an Agency?<span class>*</span></label>
        <div>
        <input type='radio' className='radioClass' id='yesId' name="radAnswer"/>
        <span className='yes'>Yes</span>
        <input type='radio' className='radioClass' id='noId' name="radAnswer"/>
        <span className='yes'>No</span>
        </div>
        </form>
        <button className='createBtn' onClick={()=> storeAndNavigate()}>Create Account</button>
    </div>
)
}

export default SignUpPage