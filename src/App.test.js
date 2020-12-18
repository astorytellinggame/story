import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main content', () => {
  render(<App />);
  const title = screen.getByText(/A Storytelling Game/i);
  expect(title).toBeInTheDocument();
});
