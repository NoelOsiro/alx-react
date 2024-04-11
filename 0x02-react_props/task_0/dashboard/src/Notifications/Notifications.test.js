import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';
import '@testing-library/jest-dom'
import { getLatestNotification } from '../utils/utils';

jest.mock('../utils/utils', () => ({
  getLatestNotification: jest.fn(() => 'Latest notification content'),
}));

describe('Notifications Component Tests', () => {
  render(<Notifications />);

  afterEach(() => {
    jest.clearAllMocks(); // Clear all mocks after each test
  });

  it('renders notifications without crashing', () => {
    const notificationsElement = screen.getByText(/Here is the list of notifications/i);
    expect(notificationsElement).toBeInTheDocument();
  });

  // it('renders close button and responds to click event', () => {
  //   const closeButton = screen.getByTestId("close-btn");
  //   expect(closeButton).toBeInTheDocument();

  //   const spy = jest.spyOn(console, 'log');
  //   fireEvent.click(closeButton);
  //   expect(spy).toHaveBeenCalledWith('Close button has been clicked');
  //   spy.mockRestore();
  // });

  // it('renders list of notifications', () => {
  //   const notifications = screen.getAllByData('listitem');
  //   expect(notifications).toHaveLength(3);

  //   const defaultNotification = screen.getByText(/New course available/i);
  //   expect(defaultNotification).toBeInTheDocument();

  //   const urgentNotifications = screen.getAllByText(/New resume available/i);
  //   expect(urgentNotifications).toHaveLength(2);

  //   const latestNotification = screen.getByText(/Latest notification content/i);
  //   expect(latestNotification).toBeInTheDocument();
  // });                                                                                                                               
});
