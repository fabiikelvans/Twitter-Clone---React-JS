import React, { useState } from 'react';
import { Avatar, Button } from '@mui/material';
import './TweetBox.css';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import db from '../../firebase';



function TweetBox() {

  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const sendTweet = e => {
    e.preventDefault();

    db.collection('posts').add({
      displayName: 'Fabii Kelvans',
      username: '@Fabii_Kelvans',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: 'https://image.freepik.com/free-psd/choosing-options-with-vr-metaverse-3d-illustration_1419-2493.jpg?w=740'
    });

    setTweetMessage('');
    setTweetImage('');
  }


  return <div className='tweetBox'>
      <form>
          <div className='tweetBox__input'>
                <Avatar src='https://image.freepik.com/free-psd/choosing-options-with-vr-metaverse-3d-illustration_1419-2493.jpg?w=740'/>
                <input value={tweetMessage} onChange={(e) => setTweetMessage(e.target.value)} placeholder="What's happening" type='text' />
          </div>

          <input className='tweetBox__image' value={tweetImage} onChange={(e) => setTweetImage(e.target.value)} placeholder="Optional: Enter image URL" type='text' />


          <div className='tweetBox__icons'>
            <InsertPhotoOutlinedIcon/>
            <GifBoxOutlinedIcon/>
            <PollOutlinedIcon/>
            <SentimentSatisfiedOutlinedIcon/>
            <CalendarTodayOutlinedIcon/>
            <LocationOnOutlinedIcon/>
            
            </div> 

          <Button onClick={sendTweet} type='submit' className='tweetBox__tweetButton'>Tweet</Button>
      </form>
  </div>;
}

export default TweetBox;
