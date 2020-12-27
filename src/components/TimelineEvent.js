import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  return (
    <div className="timeline-event">
      <h3 className="event-person">{ props.person }</h3>
      <span className="event-time"><Timestamp time={ props.timeStamp } /></span>
      <p className="event-status">{ props.status }</p>
    </div>
  );
}

export default TimelineEvent;