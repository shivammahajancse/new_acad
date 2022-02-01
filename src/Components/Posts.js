import React from 'react'
import './Post.css'
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
// import { Button } from '@mui/material';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
// import imaginecup from '../Image/imaginecup.png'
function Posts(props) {
    const [like, setlike] = useState(props.postsData.like)
    if (props.postsData.name === '') {
        return console.log("no data");
    }
    return (
        <div className='posts-Parent'>
            <div className="posts-Details">
                <div className="posts-Details-Child">
                    <Avatar src="/broken-image.jpg" />
                    <div className='name'>
                        {props.postsData.name}
                        <div style={{ fontWeight: "bold" }} className='bio'>{props.postsData.bio}</div>
                    </div>
                </div>
                <div className="posts-Content">{props.postsData.content}</div>
                <div className='image' style={{"backgroundImage":`url(${props.postsData.imageurl})`}}></div>
                {/* <img src='../I' alt='feed'></img> */}
                <div className="buttons">
                    <div className="like" onClick={() => { setlike(parseInt(`${like}`) + 1); console.log(props.postsData.like); props.postsData.like = like }}>
                        {/* <Button variant="outlined" color="error">
                            ❤️{like}    
                        </Button> */}
                        {/* <i class="fas fa-heart"></i> */}
                        <FormControlLabel
                            control={<Checkbox icon={<FavoriteBorder />}
                                checkedIcon={<Favorite />}
                                name="checkedH" />}
                            label={`${like}`}
                        />
                    </div>
                    <div className="time">{props.postsData.time}</div>
                </div>
            </div>
        </div>
    )
}

export default Posts
