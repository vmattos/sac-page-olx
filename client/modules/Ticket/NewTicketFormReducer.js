import { MOUNT_FORM } from './NewTicketFormActions';

const initialState = {
  types: [],
  states: [],
  reasons: [],
  details: '',
};

const NewTicketFormReducer = (state = initialState, action) => {
  switch(action.type) {

    case MOUNT_FORM:
      return action.form;

    default:
      return state;
  }
}

export default NewTicketFormReducer;
