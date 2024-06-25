import { render, screen } from '@testing-library/react';
import SimpleHome from './SimpleHome';

it('home page title renders', async () => {
    render(<SimpleHome />);
    const headingElement = screen.getByText(/portal/)
    expect(headingElement).toBeInTheDocument();
});

it('home page image renders', async () => {
    render(<SimpleHome />);
    const imgElement = screen.getByAltText(/door/)
    expect(imgElement).toBeInTheDocument();
})
