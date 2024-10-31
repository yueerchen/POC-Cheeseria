import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import axios from 'axios';

jest.mock('axios');  // Mock Axios requests

describe('App Component', () => {
  const cheeses = [
    { id: 1, name: 'Cheddar', pricePerKilo: 15, color: 'Yellow', picture: 'cheddar.jpg' },
    { id: 2, name: 'Brie', pricePerKilo: 20, color: 'White', picture: 'brie.jpg' },
  ];

  beforeEach(() => {
    axios.get.mockResolvedValue({ data: cheeses });
  });

  test('fetches and displays cheeses', async () => {
    render(<App />);

    await waitFor(() => {
      const cheddarElements = screen.getAllByText(/Cheddar/i);
      const cheddarPriceElements = screen.getAllByText(/\$15 per kg/i);
      const brieElements = screen.getAllByText(/Brie/i);
      const briePriceElements = screen.getAllByText(/\$20 per kg/i);

      expect(cheddarElements.length).toBeGreaterThan(0);
      expect(cheddarPriceElements.length).toBeGreaterThan(0);
      expect(brieElements.length).toBeGreaterThan(0);
      expect(briePriceElements.length).toBeGreaterThan(0);
    });
  });
});