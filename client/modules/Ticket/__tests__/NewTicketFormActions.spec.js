import test from 'ava';
import * as Actions from '../NewTicketFormActions';

test('mountForm should return an action with type MOUNT_FORM and the very form', t => {
  const form = {
    types: [],
    states: [],
    reasons: [],
    reasons: '',
  }
  const action = Actions.mountForm(form);

  t.is(action.type, Actions.MOUNT_FORM);
  t.deepEqual(action.form, form);
})
