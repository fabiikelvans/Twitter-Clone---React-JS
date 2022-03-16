import React, { useEffect, useState } from 'react';
import './Feed.css'; 
import Post from './Post';
import TweetBox from './TweetBox';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import db from '../../firebase';
import FlipMove from 'react-flip-move';

function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
      db.collection('posts').onSnapshot(snapshot => (
        setPosts(snapshot.docs.map(doc => doc.data()))
      ))
    },[]);

  return <div className='feed'>
      {/* Header */}
      <div className='feed__header'>
            <h2>Home</h2>
            <AutoFixHighIcon/>
            
      </div>
      {/* Tweetbox */}
        <TweetBox/>
      {/* Post */}

      <FlipMove>
      {posts.map(post => (
        <Post key={post.text} diplayName={post.diplayName}
        username={post.username}
        verified={post.verified}
        text={post.text}
        avatar={post.avatar}
        image={post.image}
        />
      ))}
      </FlipMove>
        
  </div>;
}

export default Feed;
