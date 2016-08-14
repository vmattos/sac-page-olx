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
