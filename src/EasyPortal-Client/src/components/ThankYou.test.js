import { render, screen } from '@testing-library/react';
import ThankYou from './ThankYou';

it('thank you page renders', async () => {
    render(<ThankYou />);
    const headingElement = screen.getByText(/Thank/)
    expect(headingElement).toBeInTheDocument();
});
