import React from 'react';
import './SidebarOptions.css'

function SidebarOptions({ active, text, Icon, displayName, username}) {
  return <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
      <Icon />
      <h2>{text}</h2>

      <div className='sidebar__profile'>
      <h4>{displayName}</h4>
      <span>{username}</span>
      </div>

  </div>;
}

export default SidebarOptions;
