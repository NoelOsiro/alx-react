import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseListRow from './CourseListRow';
import '@testing-library/jest-dom';

describe('CourseListRow Component Tests', () => {
it('renders one cell with colspan = 2 when textSecondCell does not exist and isHeader is true', () => {
    render(<table><tbody><CourseListRow isHeader textFirstCell="Header Cell" /></tbody></table>);
    const thElement = screen.getByRole('columnheader');
    expect(thElement).toHaveAttribute('colSpan', '2');
    expect(thElement.textContent).toBe('Header Cell');
});

it('renders two cells when textSecondCell is present and isHeader is true', () => {
    render(<table><tbody><CourseListRow isHeader textFirstCell="Header Cell 1" textSecondCell="Header Cell 2" /></tbody></table>);
    const thElements = screen.getAllByRole('columnheader');
    expect(thElements.length).toBe(2);
    expect(thElements[0].textContent).toBe('Header Cell 1');
    expect(thElements[1].textContent).toBe('Header Cell 2');
});

it('renders correctly two td elements within a tr element when isHeader is false', () => {
    render(<table><tbody><CourseListRow textFirstCell="Cell 1" textSecondCell="Cell 2" /></tbody></table>);
    const trElement = screen.getByRole('row');
    const tdElements = screen.getAllByRole('cell');
    expect(trElement).toBeInTheDocument();
    expect(tdElements.length).toBe(2);
    expect(tdElements[0].textContent).toBe('Cell 1');
    expect(tdElements[1].textContent).toBe('Cell 2');
});
});
