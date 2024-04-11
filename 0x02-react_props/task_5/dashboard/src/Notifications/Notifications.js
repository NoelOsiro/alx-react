import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import closeBtn from '../assets/close-btn.png';

import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape'; // Assuming NotificationItemShape is in the same directory

function Notifications({ displayDrawer, listNotifications }) {
  return (
    <div className="Notifications" data-testid="app-notifications" style={{ display: displayDrawer ? 'block' : 'none' }}>
      <div className="menuItem">Your notifications</div>
      {listNotifications.length > 0 ?
      (<p>Here is the list of notifications</p>):
      null}
      <button
        style={{ float: 'right', background: 'none', border: 'none' }}
        aria-label="Close"
        data-testid="close-btn"
        onClick={() => console.log('Close button has been clicked')}
      >
        <img src={closeBtn} alt="X" />
      </button>
      <ul>
        {listNotifications.length === 0 ? (
          <li>No new notification for now</li>
        ) : (
          listNotifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              type={notification.type}
              html={notification.html}
              value={notification.value}
            />
          ))
        )}
      </ul>
    </div>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool.isRequired,
  listNotifications: PropTypes.arrayOf(NotificationItemShape).isRequired,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
