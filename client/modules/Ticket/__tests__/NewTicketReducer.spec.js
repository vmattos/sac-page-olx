import test from 'ava';
import NewTicketReducer from '../NewTicketReducer';
import * as NewTicketActions from '../NewTicketActions';

const initialState = {
  type: [],
  state: [],
  reason: [],
  details: '',
}

test('LOAD_STATE should return initial values for new ticket', t => {
  const action = {
    type: NewTicketActions.LOAD_STATE,
    ticketType: 'foo',
    ticketState: 'bar',
    reason: 'xpto',
    details: 'fubar',
  }

  const state = NewTicketReducer(initialState, action);
  t.deepEqual(state, {
    type: 'foo',
    state: 'bar',
    reason: 'xpto',
    details: 'fubar',
  })
})

test('UPDATE_TICKET_TYPE should return actual state with updated ticket type', t => {
  const action = {
    type: NewTicketActions.UPDATE_TICKET_TYPE,
    ticketType: 'foo',
  }

  const state = NewTicketReducer(initialState, action);
  t.deepEqual(state, {
    ...initialState,
    type: 'foo',
  })
})

test('UPDATE_TICKET_STATE should return actual state with updated ticket state', t => {
  const action = {
    type: NewTicketActions.UPDATE_TICKET_STATE,
    ticketState: 'foo',
  }

  const state = NewTicketReducer(initialState, action);
  t.deepEqual(state, {
    ...initialState,
    state: 'foo',
  })
})

test('UPDATE_TICKET_REASON should return actual state with updated ticket reason', t => {
  const action = {
    type: NewTicketActions.UPDATE_TICKET_REASON,
    reason: 'foo',
  }

  const state = NewTicketReducer(initialState, action);
  t.deepEqual(state, {
    ...initialState,
    reason: 'foo',
  })
})

