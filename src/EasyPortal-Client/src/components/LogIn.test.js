import { render, screen } from '@testing-library/react';
import LogIn from './LogIn';

it('log in page renders', async () => {
    render(<LogIn />);
    const headingElement = screen.getByText(/Log/)
    expect(headingElement).toBeInTheDocument();
});
