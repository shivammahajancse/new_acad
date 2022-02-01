import React from 'react'
import Menu from './Menu'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Me.css'
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import Search from './Search';
function Me(props) {
    const [about, setabout] = useState(props.nameAbout[1].about);   
    const [exClicked, setexClicked] = useState(false);
    const [abClicked, setabClicked] = useState(false)
    const [exi, setexi] = useState(props.experience)
    let experience,company,time; 
    let newAbout;
    if (props.loginIs === false) {
        console.log("inside");
        return <Redirect to="/login" />;
    }
    return (
        <div className='me'>
            <Menu search={props.search} setSearchTrue={props.setSearchTrue} LoginIs={props.loginIs} handleLogout={props.handleLogout}></Menu>
            {!props.search ? <div className="meParent"> 
                <div className="profileImage">
                {/* <Avatar src="/broken-image.jpg" /> */}
                    <AccountCircleIcon style={{ fontSize: '15vmin', color: 'grey' }}></AccountCircleIcon>
                    <div className="info">
                        <h2>{props.nameAbout[0].name}</h2>
                        <h3>{props.nameAbout[0].bio}</h3>
                        <h4>{props.nameAbout[0].place}</h4>
                    </div>
                </div>
                <div className="about">
                <div className="headingExpi">
                    <h2>About</h2><Fab style={{backgroundColor:'lightBlue',borderRadius:'50%'}} onClick={() => { !abClicked ? setabClicked(true) : setabClicked(false) }} color="secondary" aria-label="edit"><EditIcon /></Fab>
                    </div>
                    {abClicked ? <div className="aboutWrite"><TextField onChange={(e) => newAbout = e.target.value} style={{ alignSelf: 'flex-start' }} id="standard-basic" label="About" variant="standard" /><Fab style={{backgroundColor:'lightBlue',borderRadius:'50%', size: '1%', cursor: 'pointer'}} onClick={() => { setabout(newAbout); }} color="secondary" aria-label="add"><AddIcon /></Fab></div> : console.log("not clicked on about")}
                    <div className="aboutContent">
                        {about}
                    </div>
                </div>
                <div className="experience">
                    <div className="headingExpi">
                        <h2>Experience</h2><Fab style={{backgroundColor:'lightBlue',borderRadius:'50%'}} onClick={() => { !exClicked ? setexClicked(true) : setexClicked(false)}} color="secondary" aria-label="edit"><EditIcon /></Fab> 
                    </div>
                    {
                        exClicked ? <div className="exi">
                        <div className="aboutWrite"><TextField onChange={(e)=>{experience=`${e.target.value}`;console.log(experience)}} style={{ alignSelf: 'flex-start' }} id="standard-basic" label="Experience" variant="standard" /><Fab style={{backgroundColor:'lightBlue',borderRadius:'50%', size: '1%', cursor: 'pointer'}} onClick={() => {setexi([...props.experience+{experience:`${experience}`,company:`${company}`,time:`${time}`}]);console.log("expi "+exi)}} color="primary" aria-label="add"><AddIcon /></Fab></div>
                        <div className="aboutWrite"><TextField onChange={(e)=>{company=e.target.value}} style={{ alignSelf: 'flex-start' }} id="standard-basic" label="Company" variant="standard" /></div>
                        <div className="aboutWrite"><TextField onChange={(e)=>{time=e.target.value}} style={{ alignSelf: 'flex-start' }} id="standard-basic" label="Time" variant="standard" /></div>
                        </div> : console.log("not showing expi")
                    }
                    {exi.map(each => {
                        return <div className="ExperienceContent">
                            <h3>{each.experience}</h3>
                            <h4>{each.company}</h4>
                            <h5>{each.time}</h5>
                        </div>
                    }
                    )}
                </div>
            </div> : <Search/>}
        </div>
    )
}

export default Me
