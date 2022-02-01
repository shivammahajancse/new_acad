import React from 'react'
import Menu from './Menu'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import './Notification.css'
import BadgeIcon from '@mui/icons-material/Badge';
import RocketIcon from '@mui/icons-material/Rocket';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Search from './Search';
function Notification(props) {
    if (props.loginIs === false) {
        console.log("inside");
        return <Redirect to="/login" />;
    }
    return (
        <div className='home'>
            <Menu search={props.search} setSearchTrue={props.setSearchTrue} LoginIs={props.loginIs} handleLogout={props.handleLogout}></Menu>
            {!props.search ? <div className="grandParent">
                <div className="events">
                    <h1>Events</h1>
                    {
                        props.events ? props.events.map(each => { return <div className='indi-event'><EmojiEventsIcon style={{color:'gold',margin:"0.4vmin"}}></EmojiEventsIcon> {each}</div> }) : <div className='indi-event'>No events happening now but we will Soon with a exciting event!</div>
                    }
                </div>
                <div className="homeParent">
                {props.notification.map(each => { return <div className='indi-Noti'><BadgeIcon style={{ margin: '1vmin', fontSize: '5vmin',color:'gray' }}></BadgeIcon>{each}</div> })}
                </div>
                <div className="interests">
                    <h1>Interests</h1>
                    {props.Interests.map(each=>{return <div className='indi-event'><RocketIcon style={{color:'lightblue',margin:"0.4vmin"}}></RocketIcon>{each}</div>})}
                </div>
            </div> : <Search/>}
        </div>
    )
}

export default Notification
