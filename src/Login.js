import React from "react";
import "./Login.css";
import { Button } from "@mui/material";
import { auth, provider } from "./firebase";
function Login() {
  const signIn = () => {
    // login stuff
    auth.signInWithPopup(provider)
    .catch(error => alert(error.message))
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://cdn.arstechnica.net/wp-content/uploads/2017/08/Discord-LogoWordmark-Color.png"
          alt="Logo"
        />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
