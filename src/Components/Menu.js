import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ContactMailRoundedIcon from '@mui/icons-material/ContactMailRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
function Menu(props) {
    return (
        <div className='menu-parent'>
            <div className='logo' />
            {/* <div className="Logo"></div> */}
            <div className='menu-child'>
                <button className="search"><input type="text" placeholder='Search'/><SearchRoundedIcon onClick={()=>{props.setSearchTrue();}} style={{cursor:'pointer'}}></SearchRoundedIcon></button>
                <div className="menuRight">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <button onClick={()=>{props.search ? props.setSearchTrue() : console.log("bas ji bdiya")}}><HomeRoundedIcon></HomeRoundedIcon>Home</button>
                    </Link>
                    <Link to="/notification" style={{ textDecoration: 'none' }}>
                        <button onClick={()=>{props.search ? props.setSearchTrue() : console.log("bas ji bdiya")}}><NotificationsActiveRoundedIcon></NotificationsActiveRoundedIcon>Notification</button>
                    </Link>
                    <Link to='/contact' style={{ textDecoration: 'none' }}>
                    <button onClick={()=>{props.search ? props.setSearchTrue() : console.log("bas ji bdiya")}}><ContactMailRoundedIcon></ContactMailRoundedIcon>About</button>
                    </Link>
                    <Link to="/me" style={{ textDecoration: 'none' }}>
                        <button onClick={()=>{props.search ? props.setSearchTrue() : console.log("bas ji bdiya")}}><img src="" alt="" /><AccountCircleIcon></AccountCircleIcon>Me</button>
                    </Link>
                    <Link to='/login' style={{ textDecoration: 'none' }}>
                    <button onClick={()=>{props.handleLogout()}}><LogoutRoundedIcon></LogoutRoundedIcon>LogOut</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Menu
