import React from 'react';
import './Notifications.css'
import closeBtn from '../assets/close-btn.png';
import { getLatestNotification } from '../utils/utils';


function Notifications() {
  return (
    <div className="Notifications" data-testid="app-notifications">
      <p>Here is the list of notifications</p>
      <button style={{float:'right', background: 'none', border: 'none'}}
      arial-label="Close"
      data-testid="close-btn"
      onClick={()=>console.log("Close button has been clicked")}>
      <img src={closeBtn} alt="X" />
      </button>
      <ul>
      	<li data="default">New course available</li>
      	<li data="urgent">New resume available</li>
      	<li data="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div>
  );
}
export default Notifications;