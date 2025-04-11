import React from 'react'
import {useNavigate} from 'react-router-dom'
import "./styles.css"

function LandingPage() {

const navigate = useNavigate();
function redirectToSignup(){
    navigate("/SignUpPage")
}

function redirectToSignin(){
    navigate("/SigninPage")
}



  return (
    <div className='main'>
    <div className='landing-container'>
        <h2 className='main-heading'>Welcome to PopX</h2>
        <p>Lorem ipsum dolor sit amet,</p>
        <p>consectetur adipiscing elit,</p>
        <button className='create-btn' onClick={()=> redirectToSignup()}>Create Account</button>
        <button className='login-btn' onClick={()=> redirectToSignin()}>Already Registered? Login</button>
    </div>
    </div>
  )
}

export default LandingPage