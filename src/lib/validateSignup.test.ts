import { describe, it, expect } from 'vitest';
import { validateSignup } from './validateSignup';
import type { SignupValues } from './validateSignup';

const valid: SignupValues = {
  fullName: 'Aliya Nurlanovna',
  email: 'aliya@example.com',
  tickets: '2',
};

describe('validateSignup', () => {
  it('1 accepts valid values', () => {
    const errors = validateSignup({ ...valid }, 10);
    expect(errors).toEqual({});
  });

  it('2 rejects zero tickets', () => {
    const errors = validateSignup({ ...valid, tickets: '0' }, 10);
    expect(errors.tickets).toBe('Choose 1 to 4 tickets');
  });

  it('3 rejects more than four tickets', () => {
    const errors = validateSignup({ ...valid, tickets: '5' }, 10);
    expect(errors.tickets).toBe('Choose 1 to 4 tickets');
  });

  it('4 rejects a non-integer ticket count', () => {
    const errors = validateSignup({ ...valid, tickets: '1.5' }, 10);
    expect(errors.tickets).toBe('Choose 1 to 4 tickets');
  });

  it('5 accepts exactly four tickets', () => {
    const errors = validateSignup({ ...valid, tickets: '4' }, 10);
    expect(errors).toEqual({});
  });

  it('6 rejects more tickets than seats left', () => {
    const errors = validateSignup({ ...valid, tickets: '3' }, 2);
    expect(errors.tickets).toBe('Only 2 seats left');
  });
});