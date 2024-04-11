import React from 'react';
import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';
import '@testing-library/jest-dom';

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
    const closeButton = screen.getByTestId('close-btn');
    expect(closeButton).toBeInTheDocument();
  });

  it('renders list of notifications', () => {
    render(<Notifications displayDrawer={true}/>);
    const notifications = screen.getAllByRole('listitem');
    expect(notifications).toHaveLength(3);

    const defaultNotification = screen.getByText(/New course available/i);
    expect(defaultNotification).toBeInTheDocument();

    const urgentNotifications = screen.getAllByText(/New resume available/i);
    expect(urgentNotifications).toHaveLength(1);
  });

  it('displays menu item and hides notifications when displayDrawer is false', () => {
    render(<Notifications displayDrawer={false} />);
    const menuItem = screen.getByText('Your notifications');
    expect(menuItem).toBeInTheDocument();
  
    const notificationsElement = screen.getByTestId('app-notifications');
    expect(notificationsElement).toBeInTheDocument();
    expect(notificationsElement).toHaveStyle({ display: 'none' });
  });
  

  it('displays notifications and menu item when displayDrawer is true', () => {
    render(<Notifications displayDrawer={true} />);
    const menuItem = screen.getByText('Your notifications');
    expect(menuItem).toBeInTheDocument();

    const notificationsElement = screen.getByTestId('app-notifications');
    expect(notificationsElement).toBeInTheDocument();
  });
});
