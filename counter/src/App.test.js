import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react';

//  test('it returns the sum of the passed in numbers', () => {
//    result = sum(5, 3);
//    expected = 8;
//    expect(result).toBe(expected);
//  })

test('renders without crashing', () => {
  const container = render(<App />);
});

test('renders "Counter" text', () => {
  const container = render(<App />);
  container.getByText('Counter');
});

test('renders "Foul" text', () => {
  const wrapper = render(<App />);
  wrapper.getByText(/foul/i);
});

///shorter way
test('renders "Foul" text', () => {
  const {getByText} = render(<App />);
  getByText(/foul/i);
});

///getAllByText for multiple words
test('renders "strike" text', () => {
  const wrapper = render(<App />);
  wrapper.getAllByText(/strike/i);
});
 
///test id
test('renders test id counter', () => {
  const {getByTestId} = render(<App />);
  getByTestId('counterid');
});
