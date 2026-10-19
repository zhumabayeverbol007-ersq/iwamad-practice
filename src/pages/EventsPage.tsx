import { events } from '../data/events';
import EventCard from '../components/EventCard';

function EventsPage() {
  return (
    <main className="flex flex-col items-center gap-6 p-6">
      <h1 className="text-2xl font-semibold">Events</h1>
      <div className="card-grid">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </main>
  );
}

export default EventsPage;