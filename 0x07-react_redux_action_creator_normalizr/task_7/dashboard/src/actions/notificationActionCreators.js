import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';
import { bindActionCreators } from 'redux';

import store from '../store';

const markAsRead = (index) => {
  return {
    type: 'MARK_AS_READ',
    index
  }
}

const setNotificationFilter = (filter) => {
  return {
    type: 'SET_TYPE_FILTER',
    filter
  }
}

const NotificationActions = {
  markAsRead,
  setNotificationFilter
}
// Bind the action creators
const boundNotificationActions = bindActionCreators(NotificationActions, store.dispatch);

export default boundNotificationActions;