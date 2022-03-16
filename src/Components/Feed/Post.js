import { Avatar } from '@mui/material';
import React, { forwardRef } from 'react';
import './Post.css'
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IosShareIcon from '@mui/icons-material/IosShare';

const Post = forwardRef(({
    diplayName,
    username,
    verified,
    text,
    image,
    avatar,
    timestamp,
}, ref) => {
  return <div className='post' ref={ref}>
      <div className='post__avatar'>
      <Avatar src={avatar}/>

      </div>

      <div className="post__body">
          <div className="post__header">
              <div className="post__headerText">
                 <h3> {diplayName} {" "}
                     <span className="post__headerSpecial">
                     {verified && <VerifiedIcon className='post__badge'/>} {" "}
                     {username}
                     </span>
                </h3> 
              </div>
              <div className="post__headerDescription">
                  <p>{text}</p>
              </div>
          </div>
          <img src={image}/>

            <div className='post__footer'>
                <ChatBubbleOutlineOutlinedIcon fontSize='small'/>
                <RepeatIcon fontSize='small'/>
                <FavoriteBorderIcon fontSize='small'/>
                <IosShareIcon fontSize='small'/>
            </div>
      </div>

  </div>;
});

export default Post;
