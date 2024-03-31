import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoApp from './App';

test('renders todo app with input and add button', () => {
  const { getByPlaceholderText, getByText } = render(<TodoApp />);
  const inputElement = getByPlaceholderText('Enter a new todo...');
  const addButton = getByText('Add Todo');
  expect(inputElement).toBeInTheDocument();
  expect(addButton).toBeInTheDocument();
});
