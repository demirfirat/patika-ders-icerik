import { render, screen } from "@testing-library/react";
import Header from "./Header";

test('Renders the logo image with correnct src and alt text', () => {
    render(<Header />);
    const logoImage = screen.getByAltText(/star wars/i);
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src', 'https://loodibee.com/wp-content/uploads/Star-Wars-transparent-logo-1024x1024.png');
});