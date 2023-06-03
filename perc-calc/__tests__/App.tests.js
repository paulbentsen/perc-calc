//App.tests.js
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('calculate1 returns correct result', () => {
  render(<App />);
  const input1 = screen.getByPlaceholderText('Input 1');
  const input2 = screen.getByPlaceholderText('Input 2');
  const calculateButton = screen.getByText('Calculate');

  fireEvent.change(input1, { target: { value: '50' } });
  fireEvent.change(input2, { target: { value: '200' } });
  fireEvent.click(calculateButton);

  const output = screen.getByText('100.00');
  expect(output).toBeInTheDocument();
});


test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });