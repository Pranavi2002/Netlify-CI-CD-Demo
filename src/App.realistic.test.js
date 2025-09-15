import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {

  test('renders main heading', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent(/Hello from React \+ Netlify CI\/CD!/i);
  });

  test('renders first paragraph', () => {
    render(<App />);
    const paragraph1 = screen.getByText(/Every GitHub push auto-deploys to Netlify./i);
    expect(paragraph1).toBeInTheDocument();
  });

  test('renders sub-heading', () => {
    render(<App />);
    const subHeading = screen.getByRole('heading', { level: 2 });
    expect(subHeading).toHaveTextContent(/Updated version deployed via CI\/CD!/i);
  });

  test('renders second paragraph', () => {
    render(<App />);
    const paragraph2 = screen.getByText(/Added GutHub Actions./i);
    expect(paragraph2).toBeInTheDocument();
  });

});