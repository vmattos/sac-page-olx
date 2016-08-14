import test from 'ava';
import NewTicketFormReducer from '../NewTicketFormReducer';
import * as NewTicketFormActions from '../NewTicketFormActions';

test('MOUNT_FORM action should return the very form', t => {
  const action = {
    type: NewTicketFormActions.MOUNT_FORM,
    form: {
      types: ['foo'],
      states: ['BAR', 'BAZ'],
      reasons: ['xp', 'to'],
      details: 'FUBAR',
    }
  }
  const state = NewTicketFormReducer({}, action);
  t.deepEqual(state, action.form);
})
