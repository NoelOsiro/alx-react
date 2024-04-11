import React from 'react';
import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';
import '@testing-library/jest-dom';
import { getLatestNotification } from '../utils/utils';

jest.mock('../utils/utils', () => ({
  getLatestNotification: jest.fn(() => 'Latest notification content'),
}));

describe('Notifications Component Tests', () => {
  const listNotifications = [
    {
      id: 1,
      type: "default",
      value: "New course available",
    },
    {
      id: 2,
      type: "urgent",
      value: "New resume available",
    },
    {
      id: 3,
      type: "urgent",
      html: { __html: getLatestNotification() },
    },
  ];

  afterEach(() => {
    jest.clearAllMocks(); // Clear all mocks after each test
  });

  it('renders notifications without crashing', () => {
    render(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    const notificationsElement = screen.getByText(/Here is the list of notifications/i);
    expect(notificationsElement).toBeInTheDocument();
  });

  it('renders close button and responds to click event', () => {
    render(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    const closeButton = screen.getByTestId('close-btn');
    expect(closeButton).toBeInTheDocument();
  });

  it('renders list of notifications', () => {
    render(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    const notifications = screen.getAllByRole('listitem');
    expect(notifications).toHaveLength(3);

    const defaultNotification = screen.getByText(/New course available/i);
    expect(defaultNotification).toBeInTheDocument();

    const urgentNotifications = screen.getAllByText(/New resume available/i);
    expect(urgentNotifications).toHaveLength(1);
  });

  it('displays menu item and hides notifications when displayDrawer is false', () => {
    render(<Notifications displayDrawer={false} listNotifications={listNotifications} />);
    const menuItem = screen.getByText('Your notifications');
    expect(menuItem).toBeInTheDocument();

    const notificationsElement = screen.getByTestId('app-notifications');
    expect(notificationsElement).toBeInTheDocument();
    expect(notificationsElement).toHaveStyle({ display: 'none' });
  });

  it('displays notifications and menu item when displayDrawer is true', () => {
    render(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    const menuItem = screen.getByText('Your notifications');
    expect(menuItem).toBeInTheDocument();

    const notificationsElement = screen.getByTestId('app-notifications');
    expect(notificationsElement).toBeInTheDocument();
  });

  it('renders No new notification for now when listNotifications is empty', () => {
    render(<Notifications displayDrawer={true} listNotifications={[]} />);
    const noNotificationMessage = screen.getByText(/No new notification for now/i);
    expect(noNotificationMessage).toBeInTheDocument();
  });

  it('does not render Here is the list of notifications when listNotifications is empty', () => {
    render(<Notifications displayDrawer={true} listNotifications={[]} />);
    const notificationsElement = screen.queryByText(/Here is the list of notifications/i);
    expect(notificationsElement).not.toBeInTheDocument();
  });
});
