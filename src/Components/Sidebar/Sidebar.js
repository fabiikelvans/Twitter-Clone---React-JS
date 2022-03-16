import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOptions from './SidebarOptions';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Button } from '@mui/material';
import { Avatar } from '@mui/material';


function Sidebar() {
  return <div className='sidebar'>
      {/* Twitter Icon */}
      <TwitterIcon className='sidebar__TwitterIcon' />
      <SidebarOptions active Icon={HomeIcon} text={'Home'} />
      <SidebarOptions Icon={TagIcon} text={'Explore'} />
      <SidebarOptions Icon={NotificationsNoneIcon} text={'Notifications'} />
      <SidebarOptions Icon={MailOutlineIcon} text={'Messages'} />
      <SidebarOptions Icon={BookmarkBorderIcon} text={'Bookmark'} />
      <SidebarOptions Icon={ListAltIcon} text={'List'} />
      <SidebarOptions Icon={PersonOutlineIcon} text={'Profile'} />
      <SidebarOptions Icon={MoreHorizIcon} text={'More'} />

      <Button variant='outlined' className='sidebar__tweet' fullWidth>Tweet</Button>

      <div className='sidebar__profile'>
      <div className='flex-1'>
      <Avatar src='https://image.freepik.com/free-psd/choosing-options-with-vr-metaverse-3d-illustration_1419-2493.jpg?w=740'/>
      <div className='sidebar__profile-name'>
        <div className='sidebar__profile-verified'>
      <h4>Fabii Kelvans <VerifiedIcon className='post__badge'/></h4>
      
        </div>
      <span>@Fabii_Kelvans</span>
      </div>
      </div>
      <MoreHorizIcon/>
      </div>

  </div>;
}

export default Sidebar;
