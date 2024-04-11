import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseList from './CourseList';
import '@testing-library/jest-dom';

describe('CourseList Component Tests', () => {
  describe('With CourseList containing elements', () => {
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];

    beforeEach(() => {
      // eslint-disable-next-line testing-library/no-render-in-setup
      render(<CourseList listCourses={listCourses} />);
    });

    it('renders CourseList component without crashing', () => {
      // Test rendering without crashing
    });

    it('renders the correct number of rows', () => {
      const rows = screen.getAllByRole('row');
      // Expect 2 header rows + number of data rows
      expect(rows.length).toBe(2 + listCourses.length);
    });

    it('renders the header row with "Available courses" and "Course name"', () => {
      const headerRow = screen.getByRole('row', { name: /available courses/i });
      expect(headerRow).toBeInTheDocument();

      const courseNameHeader = screen.getByText(/course name/i);
      expect(courseNameHeader).toBeInTheDocument();
    });

    it('renders data rows with course names and credits', () => {
      listCourses.forEach(course => {
        const courseName = screen.getByText(course.name);
        expect(courseName).toBeInTheDocument();

        const credit = screen.getByText(course.credit.toString());
        expect(credit).toBeInTheDocument();
      });
    });
  });

  describe('With CourseList Empty', () => {
    beforeEach(() => {
      // eslint-disable-next-line testing-library/no-render-in-setup
      render(<CourseList listCourses={[]} />);
    });

    it('renders CourseList component without crashing', () => {
      // Test rendering without crashing
    });

    it('renders the correct number of rows', () => {
      const rows = screen.getAllByRole('row');
      // Expect 2 header rows (1 for empty message) + 1 row for "No course available yet"
      expect(rows.length).toBe(3);
    });

    it('renders "No course available yet" message', () => {
      const noCourseMessage = screen.getByText(/no course available yet/i);
      expect(noCourseMessage).toBeInTheDocument();
    });
  });
});
