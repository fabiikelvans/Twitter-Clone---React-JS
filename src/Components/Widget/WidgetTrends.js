import React from 'react';
import './WidgetTrends.css';

function WidgetTrends({ topic, Icon, name, tweets}) {
  return <div className='trends'>
      <div className='trends__header'>
          <h5>{topic}</h5>
          <Icon/>
      </div>
      <div className='trends__body'>
          <h3>{name}</h3>
          <p>{tweets}</p>
      </div>
  </div>;
}

export default WidgetTrends;
