import { render, screen } from '@testing-library/react';
import App from './App';

test('renders actividad header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Actividad: Prueba Unitaria con Jest/i); // Actualiza el texto que se busca
  expect(headerElement).toBeInTheDocument();
});
