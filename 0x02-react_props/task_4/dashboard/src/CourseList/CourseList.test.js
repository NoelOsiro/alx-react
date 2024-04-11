import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseList from './CourseList';
import '@testing-library/jest-dom'

describe('CourseList Component Tests', () => {
    it('renders CourseList component without crashing', () => {
        render(<CourseList />);
    });

    it('renders the 5 different rows', () => {
        render(<CourseList />);
        const rows = screen.getAllByRole('row');
        expect(rows.length).toBe(5); // 2 header rows + 3 data rows
    });
});
