import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'

import Login from './Login';

describe('Login Component Tests', () => {
    

  it('renders login form without crashing', () => {
    render(<Login />);
    const loginFormElement = screen.getByTestId('app-body');
    expect(loginFormElement).toBeInTheDocument();
  });

  it('renders email and password input fields', () => {
    render(<Login />);
    const loginFormElement = screen.getByTestId('app-body');

    expect(loginFormElement).toHaveTextContent('Email:');
    expect(loginFormElement).toHaveTextContent('Password:');
  });

  it('submits form when OK button is clicked', () => {
    render(<Login />);
    const emailInput = screen.getByTestId('email');
    const passwordInput = screen.getByTestId("password");
    const okButton = screen.getByText('OK');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(okButton);

    // Add assertions here for form submission behavior if needed
  });
});
