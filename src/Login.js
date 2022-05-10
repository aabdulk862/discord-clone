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
            <img src="https://cdn.arstechnica.net/wp-content/uploads/2017/08/Discord-LogoWordmark-Color.png" alt="Logo" />
        </div>
        <Button onclick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login