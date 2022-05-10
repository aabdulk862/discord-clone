import React from 'react'
import './Login.css'
import { Button } from '@mui/material';
function Login() {
    const signIn = () =>{
        // login stuff
    }
  return (
    <div className='login'>
        <div className="login__logo">
            <img src="https://logos-download.com/wp-content/uploads/2021/01/Discord_Logo-1.png" alt="Logo" />
        </div>
        <Button onclick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login