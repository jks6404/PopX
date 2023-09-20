import React from 'react'
import "./styles.css"
import image from "./images.jpg"

function Profile({name,email}) {
    let UserName = localStorage.getItem("userName")
    let UserEmail = localStorage.getItem("userEmail")
  return (
    <div className='userPage-container'>
        <div className='Upper'>
            <h1>Account Settings</h1>
        </div>
        <div className='middle'>
        <div className="profilePge-details">
          <img src={image} className="profilePge-photo" alt />
          </div>
            <div className='right'>
                <p>{UserName}</p>
                <p>{UserEmail}</p>
            </div>
        </div>
        <div className='bottom'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </div>
  )
}

export default Profile