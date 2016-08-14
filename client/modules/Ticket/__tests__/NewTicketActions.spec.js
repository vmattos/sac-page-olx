import test from 'ava';
import * as NewTicketActions from '../NewTicketActions';

test('loadState should return an action with type LOAD_STATE and the starting values for the ticket', t => {
  const form = {
    types: ['foo', 'bar'],
    states: ['FU', 'BA'],
    reasons: ['BAZ', 'MUX'],
    details: 'xpto',
  }

  const action = NewTicketActions.loadState(form);
  t.is(action.type, NewTicketActions.LOAD_STATE);
  t.is(action.ticketType, 'foo');
  t.is(action.ticketState, 'FU');
  t.is(action.reason, 'BAZ');
  t.is(action.details, 'xpto');
})
