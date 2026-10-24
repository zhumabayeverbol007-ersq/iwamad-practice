import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, it, expect } from 'vitest';
import EventsPage from './EventsPage';
import { events } from '../data/events';

describe('EventsPage', () => {
  it('renders one card per event', () => {
    render(
      <MemoryRouter>
        <EventsPage />
      </MemoryRouter>
    );

    const cards = screen.getAllByRole('article');
    expect(cards).toHaveLength(events.length);
  });
});