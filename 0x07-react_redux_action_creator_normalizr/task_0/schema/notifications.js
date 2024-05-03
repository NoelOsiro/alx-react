import * as Notifications from '../../notifications.json';

export const getAllNotificationsByUser = (userId) => {
    const allNotifications = Notifications.default;
    const userNotifications = allNotifications.filter((notification) => notification.author.id === userId);
    return userNotifications.map((notification) => notification.context);
  };
  