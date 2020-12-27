import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  return (
    <div>
      <ul>
        <li>{ props.person }</li>
        <li>{ props.status }</li>
        <Timestamp time={ props.timeStamp } />
      </ul>
    </div>
  );
}

export default TimelineEvent;