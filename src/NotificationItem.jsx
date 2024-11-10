import React from 'react';

function NotificationItem({ id, name, message, onClear }) {
  return (
    <div className="notification-item">
      <h3>{name}</h3>
      <p>{message}</p>
      <button onClick={() => onClear(id)}>Clear</button>
    </div>
  );
}

export default NotificationItem;
