import * as Notifications from '../../../notifications.json';
import { normalize, schema } from 'normalizr';

// Define the user entity
const user = new schema.Entity('users');

// Define the message entity
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });

// Define the notification entity with author as user and context as message
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

// Export the normalized data
export const normalizedData = normalize(Notifications.default, [notification]);
