import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter, useNavigate, useParams } from 'react-router-dom';
import ShipDetails from './ShipDetails';
import { afterEach, beforeEach, describe, expect, vi } from 'vitest';
import { wait } from '@testing-library/user-event/dist/cjs/utils/index.js';

// mock the useNavigate function
const mockNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => mockNavigate,
        useParams: () => ({name: "Millennium Falcon"}), //Mock param name
    };
});

describe('ShipDetails', () => {
    beforeEach(() => {
        global.fetch = vi.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve({
                results: [
                    {
                        name: 'Millennium Falcon',
                        model: 'YT-1300 light freighter',
                        hyperdrive_rating: '0.5',
                        passengers: '6',
                        max_atmosphering_speed: '1050',
                        manufacturer: 'Corellian Engineering Corporation',
                        crew: '4',
                        cargo_capacity: '100000'
                    }
                ]
            })
        })
    );
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    test('renders loading state initially', () => {
        render(
            <BrowserRouter>
            <ShipDetails />
            </ BrowserRouter>
        );
        expect(screen.getByText(/Loading../i)).toBeInTheDocument();
    });

    test('renders ship details after fetch', async () => {
        render(
            <BrowserRouter>
            <ShipDetails />
            </ BrowserRouter>
        );
        await waitFor(() => {
            expect(screen.getByText(/Millennium Falcon/i)).toBeInTheDocument();
            expect(screen.getByText(/Model:/i)).toBeInTheDocument();
            expect(screen.getByText(/YT-1300 light freighter/i)).toBeInTheDocument();
            expect(screen.getByText(/Hyperdrive Rating:/i)).toBeInTheDocument();
            expect(screen.getByText(/0.5/i)).toBeInTheDocument();
        });
    });

    test('navigates back when Back button is clicked', async () => {
        render(
            <BrowserRouter>
            <ShipDetails />
            </ BrowserRouter>
        );

        await waitFor(() => screen.getByText(/Millennium Falcon/i));

        const backButton = screen.getByText(/Back/i);
        backButton.click();

        expect(mockNavigate).toHaveBeenLastCalledWith(-1);
    });
});