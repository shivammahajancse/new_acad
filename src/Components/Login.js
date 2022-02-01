import React from 'react'
import './Login.css'
import '../App.js'
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import Alert from '@mui/material/Alert';
// import { html } from 'cheerio/lib/api/manipulation';
function Login(props) {
    const [user, setuser] = useState({ userName: "", pass: "" });
    const [message, setmessage] = useState("");
    console.log("inside login");
    if (props.LoginIs) {
        console.log("inside if of login" + props.LoginIs);
        return <Redirect to='/' />
    }
    const SignIn = () => {
        console.log("inside sign in func of login");
        const idPass = props.receiveData(user);
        !idPass ? setmessage("Incorrect Username or Password") : setmessage("")
    }
    return (
        <div className='login-gp'>
            <div className="login-midparent">
                <div className="logo"></div>
                A Community for Better Future !
            </div>
            <div className='login-parent'>
                <img src="" alt="" />
                <h2>Acad Login!</h2>
                <TextField style={{ margin: '1vmin' }} onChange={(e) => { setuser({ userName: `${e.target.value}`, pass: `${user.pass}` }) }} id="filled-basic" label="UserName" variant="filled" />
                <TextField style={{ margin: '1vmin' }} onChange={(e) => { setuser({ userName: `${user.userName}`, pass: `${e.target.value}` }) }} id="filled-basic" label="Password" variant="filled" />
                <Button style={{ margin: '1vmin' }} onClick={SignIn} variant="outlined">SignIn</Button>
                {/* <div className="message">{message}</div> */}
                {message ? <Alert severity="error">{message}</Alert> : console.log('no message')}
                <div className="signUp-popUp">Not A User yet? <Link to='/signup' style={{ textDecoration: 'none' }}>SignUp</Link></div>
            </div>
        </div>
    )
}

export default Login
