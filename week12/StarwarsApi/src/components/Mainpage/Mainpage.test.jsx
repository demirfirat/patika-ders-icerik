import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Mainpage from './Mainpage';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

//We simulate a fake data with mockData.
const mockData = {
  results: [
    {
      name: 'X-wing',
      model: 'T-65 X-wing',
      hyperdrive_rating: '1.0',
      url: 'https://swapi.dev/api/starships/12/',
      passengers: '0'
    },
    {
      name: 'Millennium Falcon',
      model: 'YT-1300 light freighter',
      hyperdrive_rating: '0.5',
      url: 'https://swapi.dev/api/starships/10/',
      passengers: '6'
    }
  ],
  next: null
};

// pull the data with the function mocking tool using vi.fn
global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockData),
  })
);
//MainPage e2e test screen
describe('Mainpage E2E Tests', () => {
  beforeEach(() => {
    fetch.mockClear(); //mockclear on every start
  });
//wrap the mainpage because the router is used
  test('renders starship list on load', async () => {
    render(
      <MemoryRouter>
        <Mainpage />
      </MemoryRouter>
    );

    // Check X-wing and Millennium Falcon when the ship list loads
    await waitFor(() => {
      expect(screen.getByText('X-wing')).toBeInTheDocument();
      expect(screen.getByText('Millennium Falcon')).toBeInTheDocument();
    });
  });

  test('filters starships based on search input', async () => {
    render(
      <MemoryRouter>
        <Mainpage />
      </MemoryRouter>
    );

    //  Run the filter when the ship list is loaded
    await waitFor(() => screen.getByText('X-wing'));

    const searchInput = screen.getByPlaceholderText('Name / Model');
    fireEvent.change(searchInput, { target: { value: 'Falcon' } });

    // Filter the ones with the name ‘Millennium Falcon’ and check if others are not showing up.
    await waitFor(() => {
      expect(screen.getByText('Millennium Falcon')).toBeInTheDocument();
      expect(screen.queryByText('X-wing')).not.toBeInTheDocument();
    });
  });

  test('loads more starships on "Show More" click', async () => {
    // mock to load new ships on Show More click.
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            results: [
              { name: 'Y-wing', model: 'BTL-A4 Y-wing', hyperdrive_rating: '1.0', url: 'https://swapi.dev/api/starships/11/', passengers: '0' }
            ],
            next: 'next_url'
          })
      })
    );

    render(
      <MemoryRouter>
        <Mainpage />
      </MemoryRouter>
    );

    // check the "Show More" Button.
    const showMoreButton = screen.getByText('Show More');
    fireEvent.click(showMoreButton);

    // See if new ships have been added and old ships are still avaliable.
    await waitFor(() => screen.getByText('Y-wing'));
    await waitFor(() => screen.getByText('X-wing')); // Check to see if the X-wing still exists.
  });
});
