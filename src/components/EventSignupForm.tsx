import { useState } from 'react';
import type { ChangeEvent, SubmitEvent } from 'react';
import type { CampusEvent } from '../data/events';
import { validateSignup } from '../lib/validateSignup';
import type { SignupValues, SignupErrors } from '../lib/validateSignup';
import TextField from './ui/TextField';
import Button from './ui/Button';

type EventSignupFormProps = {
  event: CampusEvent;
};

const initialValues: SignupValues = {
  fullName: '',
  email: '',
  tickets: '1',
};

function EventSignupForm({ event }: EventSignupFormProps) {
  const [values, setValues] = useState<SignupValues>(initialValues);
  const [touched, setTouched] = useState<Partial<Record<keyof SignupValues, boolean>>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [seatsLeft, setSeatsLeft] = useState(event.seats);
  const [status, setStatus] = useState<string | null>(null);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  }

  function handleBlur(event: ChangeEvent<HTMLInputElement>) {
    const { name } = event.target;
    setTouched((current) => ({ ...current, [name]: true }));
  }

  const errors: SignupErrors = validateSignup(values, seatsLeft);
  const showError = (field: keyof SignupValues) =>
    touched[field] || submitAttempted ? errors[field] : undefined;

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitAttempted(true);
    if (Object.keys(errors).length === 0) {
      const tickets = Number(values.tickets);
      setSeatsLeft(seatsLeft - tickets);
      setStatus(`Booked: ${tickets} for ${values.fullName.trim()}.`);
      setValues(initialValues);
      setTouched({});
      setSubmitAttempted(false);
    }
  }

  return (
    <div>
      <p>Seats left: {seatsLeft}</p>

      <form onSubmit={handleSubmit} noValidate>
        <TextField
          label="Full name"
          name="fullName"
          type="text"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={showError('fullName')}
        />

        <TextField
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={showError('email')}
        />

        <TextField
          label="Tickets"
          name="tickets"
          type="number"
          min={1}
          max={4}
          value={values.tickets}
          onChange={handleChange}
          onBlur={handleBlur}
          error={showError('tickets')}
        />

        <Button type="submit" variant="primary">Book</Button>
      </form>

      {status && <p role="status">{status}</p>}
    </div>
  );
}

export default EventSignupForm;