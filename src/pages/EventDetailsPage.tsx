import { Link, useParams } from 'react-router';
import { events } from '../data/events';
import EventSignupForm from '../components/EventSignupForm';

function EventDetailsPage() {
  const { eventId } = useParams();
  const event = events.find((item) => item.id === Number(eventId));

  if (!event) {
    return (
      <main className="flex flex-col items-center gap-4 p-6">
        <h1 className="text-2xl font-semibold">Event not found</h1>
        <p>No event with id {eventId}.</p>
        <Link to="/events" className="text-blue-600 underline">Back to events</Link>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center gap-4 p-6">
      <h1 className="text-2xl font-semibold">{event.title}</h1>
      <p>{event.date}</p>
      <p>{event.place}</p>
      <EventSignupForm event={event} />
      <Link to="/events" className="text-blue-600 underline">Back to events</Link>
    </main>
  );
}

export default EventDetailsPage;