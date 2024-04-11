import React from 'react';
import { render } from '@testing-library/react';
import NotificationItem from './NotificationItem';
import '@testing-library/jest-dom'
import { screen } from '@testing-library/react';

describe('NotificationItem Component Tests', () => {
  it('renders without crashing', () => {
    render(<NotificationItem type="default" value="test" />);
  });

it('renders correct HTML with dummy type and value props', () => {
    render(<NotificationItem type="default"  value="test" />);
    const liElement = screen.getByRole('listitem');
    expect(liElement).toHaveTextContent('test');
});

it('renders correct HTML with dummy HTML prop', () => {
    const htmlContent = { __html: '<u>test</u>' };
    render(<NotificationItem type="default"  html= {htmlContent} />);
    const liElement = screen.getByRole('listitem');
    expect(liElement).toBeInTheDocument();
    expect(liElement.innerHTML).toContain(htmlContent.__html);
});
});
