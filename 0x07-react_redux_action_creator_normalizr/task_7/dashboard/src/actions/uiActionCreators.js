import { bindActionCreators } from 'redux';
import store from '../store';
import {
    LOGIN,
    LOGOUT,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';
  
const login = (email, password) => ({
    type: LOGIN,
    user: { email, password },
  });
  
const logout = () => ({
    type: LOGOUT,
  });
  
const displayNotificationDrawer = () => ({
    type: DISPLAY_NOTIFICATION_DRAWER,
  });
  
const hideNotificationDrawer = () => ({
    type: HIDE_NOTIFICATION_DRAWER,
  });


const UIActions = {
    login,
    logout,
    displayNotificationDrawer,
    hideNotificationDrawer,
  };
const boundUIActions = bindActionCreators(UIActions, store.dispatch);
  
export default boundUIActions;
  