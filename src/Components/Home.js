import React from 'react'
import Menu from './Menu'
import '../App'
import './Home.css'
import { TextField } from '@mui/material';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Posts from './Posts';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Search from './Search'
import RocketIcon from '@mui/icons-material/Rocket';
import Avatar from '@mui/material/Avatar';
function Home(props) {
    console.log(props.loginIs);
    if (!props.loginIs) {
        console.log("inside home fuhcn");
        return <Redirect to="/login" />;
    }
    console.log("inside home");
    return (
        <div className='home'>
            <Menu search={props.search} setSearchTrue={props.setSearchTrue} LoginIs={props.loginIs} handleLogout={props.handleLogout}></Menu>
            {!props.search ? <div className="grandParent">
                <div className="events">
                    <h1>Events</h1>
                    {
                        props.events ? props.events.map(each => { return <div className='indi-event'><EmojiEventsIcon style={{ color: 'gold', margin: "0.4vmin" }}></EmojiEventsIcon> {each}</div> }) : <div className='indi-event'>No events happening now but we will Soon with a exciting event!</div>
                    }
                </div>
                <div className="homeParent">
                    <div className="addPost">
                        <div className="addPostOne">
                            <Avatar src="/broken-image.jpg" />
                            <TextField style={{ marginLeft: '2vmin' }} id="standard-basic" label="Share your Achievments Now" variant="standard" />
                        </div>
                        <div className="addPostBottom">
                            <button>
                                Share
                            </button>
                        </div>
                    </div>
                    {props.postsData.map(each => { return <Posts postsData={each}></Posts> })}
                </div>
                <div className="interests">
                    <h1>Interests</h1>
                    {props.Interests.map(each => { return <div className='indi-event'><RocketIcon style={{ color: 'lightblue', margin: "0.4vmin" }}></RocketIcon>{each}</div> })}
                </div>
            </div> : <Search />}
        </div>
    )
}

export default Home
