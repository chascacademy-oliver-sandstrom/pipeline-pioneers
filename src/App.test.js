import { render, screen } from '@testing-library/react';
import HelloWorld from './HelloWorld';

test('renders Hello, World!', () => {
  render(<HelloWorld />);
  const linkElement = screen.getByText(/Hosting är kul!!/i);
  expect(linkElement).toBeInTheDocument();
});
