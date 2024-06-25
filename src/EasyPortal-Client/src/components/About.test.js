import { render, screen } from '@testing-library/react';
import About from './About';

it('about page heading renders', async () => {
    render(<About />);
    const headingElement = screen.getByText(/about/)
    expect(headingElement).toBeInTheDocument();
});
