import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
// import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import './Signup.css'
import './Login'
function Signup() {
    // const [successMessage, setsuccessMessage] = useState("");
    let signupObj = {
        name:'',
        lastName:'',
        place:'',
        dob:'',
        bio:'',
        edu:'',
        class:''
    }
    const handleSignup = ()=>{
        
    }
    return (
        <div className='signup'>
            <div className="signupChildDetails">
                <div className="signupChildDetails1">
                <div className="logo"></div>
                We Support Students and their Dreams !
                </div>
                <div className="signupChildDetails2">
                    Acad Signup!
                    <div className="lineone">
                        <TextField onChange={(e)=>signupObj.name=`${e.target.value}`} style={{margin:'1vmin'}} id="filled-basic" label="Name" variant="filled" />
                        <TextField onChange={(e)=>signupObj.lastName=`${e.target.value}`} style={{margin:'1vmin'}} id="filled-basic" label="Last Name" variant="filled" />
                    </div>
                    <div className="lineone">
                        <TextField onChange={(e)=>signupObj.place=`${e.target.value}`} style={{margin:'1vmin'}} id="filled-basic" label="Place" variant="filled" />
                        <TextField onChange={(e)=>signupObj.dob=`${e.target.value}`} style={{margin:'1vmin'}} id="filled-basic" label="dd/mm/yy" variant="filled" />
                    </div>
                    <TextField onChange={(e)=>signupObj.bio=`${e.target.value}`} width='120%' style={{margin:'1vmin'}} id="filled-basic" label="Bio" variant="filled" />
                    <div className="lineone">
                        <TextField onChange={(e)=>signupObj.edu=`${e.target.value}`} style={{margin:'1vmin'}} id="filled-basic" label="Education" variant="filled" />
                        <TextField onChange={(e)=>signupObj.class=`${e.target.value}`} style={{margin:'1vmin'}} id="filled-basic" label="Class" variant="filled" />
                    </div>
                    <Alert style={{margin:'1vmin'}} severity="error">{""}</Alert>
                    {/* {signupMessage ? <Alert style={{margin:'1vmin'}} severity="success">{signupMessage}</Alert> : console.log('no message')} */}
                    <Button style={{width:'30%'}} onClick={handleSignup} variant="outlined">SignUp</Button>
                    {/* {successMessage ? <Alert style={{margin:'1vmin'}} severity="success">{successMessage}</Alert> : console.log("success is not shown")} */}
                </div>
            </div>
        </div>
    )
}

export default Signup
