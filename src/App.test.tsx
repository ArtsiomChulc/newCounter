import React from 'react';
import { render, screen } from '@testing-library/react';
import AppWithReducers from './AppWithReducers';

test('renders learn react link', () => {
  render(<AppWithReducers />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
