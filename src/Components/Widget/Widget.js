import React from 'react';
import './Widget.css';
import SearchIcon from '@mui/icons-material/Search';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import WidgetTrends from './WidgetTrends';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';

function Widget() {
  return <div className='widgets'>

    <div className='widgets__input'>
        <SearchIcon className='widgets__searchIcon' />
        <input placeholder='Search Twitter' type='text' />
    </div>

    <div className='widgets__widgetContainer'>
      <div className='widgets__widgetContainer-header'> 
      <h2> Trends for you </h2>
      <SettingsOutlinedIcon className='widgets__settingsIcon'/>
      </div>

      {/* Trends */}
      <WidgetTrends topic={'Technology'} Icon={ MoreHorizIcon} name={'Ethereum'} tweets={'148K Tweets'}/>
      <WidgetTrends topic={'Trending in Kenya'} Icon={ MoreHorizIcon} name={'Safaricom'} tweets={'10.2K Tweets'}/>
      <WidgetTrends topic={'Technology'} Icon={ MoreHorizIcon} name={'React JS'} tweets={'1.2M Tweets'}/>
      <WidgetTrends topic={'Agriculture'} Icon={ MoreHorizIcon} name={'Climate Change'} tweets={'120.4K Tweets'}/>

      {/* Show More Button */}
      <div className='show-btn'>
      <Button variant="text" className='showMore__btn'>Show More</Button>
      </div>
      
    </div>
  </div>;
}

export default Widget;
