// src/Counter.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('el contador inicia en 0 y se incrementa al hacer clic', () => {
  render(<Counter />);
  
  const countText = screen.getByTestId('count');
  expect(countText).toHaveTextContent('Contador: 0');

  const button = screen.getByText('Incrementar');
  fireEvent.click(button);

  expect(countText).toHaveTextContent('Contador: 1');
});
