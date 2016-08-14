import test from 'ava';
import TicketForm from '../ticketForm.model';

const ticketForm = new TicketForm({
  types: [],
  states: [],
  reasons: [],
});


test('buildForm should return a structured form', t => {
  const form = ticketForm.buildForm();
  t.is(form.types.length, 0);
  t.is(form.states.length, 0);
  t.is(form.reasons.length, 0);
  t.is(form.details.length, 0);
})
