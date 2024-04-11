import React from 'react';
import './Notifications.css';
import closeBtn from '../assets/close-btn.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

function Notifications({ displayDrawer }) {
  return (
    <div className="Notifications" data-testid="app-notifications" style={{ display: displayDrawer ? 'block' : 'none' }}>
      <div className="menuItem">Your notifications</div>
      <p>Here is the list of notifications</p>
      <button
        style={{ float: 'right', background: 'none', border: 'none' }}
        aria-label="Close"
        data-testid="close-btn"
        onClick={() => console.log('Close button has been clicked')}
      >
        <img src={closeBtn} alt="X" />
      </button>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
      </ul>
    </div>
  );
}

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
