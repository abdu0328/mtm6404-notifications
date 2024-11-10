import React, { useState } from 'react';
import notifications from './notifications'; // Assuming this file contains the notification data
import NotificationItem from './NotificationItem'; // Create this component as mentioned in the previous steps

function App() {
  const [notificationList, setNotificationList] = useState(notifications);

  // Function to clear individual notifications by ID
  const clearNotification = (id) => {
    setNotificationList(notificationList.filter((notif) => notif.id !== id));
  };

  // Function to clear all notifications
  const clearAllNotifications = () => {
    setNotificationList([]);
  };

  return (
    <div className="notification-app">
      <h1>Notifications</h1>
      <p>Total Notifications: {notificationList.length}</p>
      <button onClick={clearAllNotifications}>Clear All</button>
      {notificationList.length === 0 ? (
        <p>No notifications to show.</p>
      ) : (
        notificationList.map((notif) => (
          <NotificationItem
            key={notif.id}
            id={notif.id}
            name={notif.name}
            message={notif.message}
            onClear={clearNotification}
          />
        ))
      )}
    </div>
  );
}

export default App;

