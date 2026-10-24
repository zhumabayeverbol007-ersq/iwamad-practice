import { useState } from 'react';
import type { ChangeEvent, SubmitEvent } from 'react';
import { validateRegistration } from '../lib/validateRegistration';
import type { RegistrationValues, RegistrationErrors } from '../lib/validateRegistration';
import Button from '../components/ui/Button';
import TextField from '../components/ui/TextField';

const initialValues: RegistrationValues = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
  acceptTerms: false,
};

function RegisterPage() {
  const [values, setValues] = useState<RegistrationValues>(initialValues);
  const [touched, setTouched] = useState<Partial<Record<keyof RegistrationValues, boolean>>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, type, value, checked } = event.target;
    setValues((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  function handleBlur(event: ChangeEvent<HTMLInputElement>) {
    const { name } = event.target;
    setTouched((current) => ({ ...current, [name]: true }));
  }

  const errors: RegistrationErrors = validateRegistration(values);
  const showError = (field: keyof RegistrationValues) =>
    touched[field] || submitAttempted ? errors[field] : undefined;

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitAttempted(true);
    if (Object.keys(errors).length === 0) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <main className="flex justify-center p-6">
        <p role="status">Thanks, {values.fullName.trim()}. You are registered.</p>
      </main>
    );
  }

  return (
    <main className="flex justify-center p-6">
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
          label="Password"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={showError('password')}
        />

        <TextField
          label="Confirm password"
          name="confirmPassword"
          type="password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          error={showError('confirmPassword')}
        />

        <div className="check">
          <input
            id="acceptTerms"
            name="acceptTerms"
            type="checkbox"
            checked={values.acceptTerms}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label htmlFor="acceptTerms">Accept terms</label>
        </div>
        {showError('acceptTerms') && (
          <p className="field-error">{showError('acceptTerms')}</p>
        )}

        <Button type="submit" variant="primary">
          Create account
        </Button>
      </form>
    </main>
  );
}

export default RegisterPage;