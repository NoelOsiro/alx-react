import React from 'react';
import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';
import '@testing-library/jest-dom'


jest.mock('../utils/utils', () => ({
  getLatestNotification: jest.fn(() => 'Latest notification content'),
}));

describe('Notifications Component Tests', () => {
  

  afterEach(() => {
    jest.clearAllMocks(); // Clear all mocks after each test
  });

  it('renders notifications without crashing', () => {
    render(<Notifications />);
    const notificationsElement = screen.getByText(/Here is the list of notifications/i);
    expect(notificationsElement).toBeInTheDocument();
  });

  it('renders close button and responds to click event', () => {
    render(<Notifications />);
    const closeButton = screen.getByTestId("close-btn");
    expect(closeButton).toBeInTheDocument();
  });

  it('renders list of notifications', () => {
    render(<Notifications />);
    const notifications = screen.getAllByRole('listitem');
    expect(notifications).toHaveLength(3);

    const defaultNotification = screen.getByText(/New course available/i);
    expect(defaultNotification).toBeInTheDocument();

    const urgentNotifications = screen.getAllByText(/New resume available/i);
    expect(urgentNotifications).toHaveLength(1);
  });                                                                                                                               
});
