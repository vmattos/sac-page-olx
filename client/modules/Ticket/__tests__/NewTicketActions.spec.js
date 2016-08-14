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

test('updateTicketType should return an action with type UPDATE_TICKET_TYPE and the very ticketType', t => {
  const ticketType = 'foo';
  const action = NewTicketActions.updateTicketType(ticketType);
  t.is(action.type, NewTicketActions.UPDATE_TICKET_TYPE);
  t.is(action.ticketType, 'foo');
})

test('updateTicketState should return an action with type UPDATE_TICKET_STATE and the very ticketState', t => {
  const ticketState = 'foo';
  const action = NewTicketActions.updateTicketState(ticketState);
  t.is(action.type, NewTicketActions.UPDATE_TICKET_STATE);
  t.is(action.ticketState, 'foo');
})

test('updateTicketReason should return an action with type UPDATE_TICKET_REASON and the very ticketReason', t => {
  const ticketReason = 'foo';
  const action = NewTicketActions.updateTicketReason(ticketReason);
  t.is(action.type, NewTicketActions.UPDATE_TICKET_REASON);
  t.is(action.reason, 'foo');
})

