import {
    UPDATE_TICKET_TYPE,
    UPDATE_TICKET_STATE,
  } from './NewTicketActions';

const initialState = {}

const NewTicketReducer = (state = initialState, action) => {
  switch(action.type) {

    case UPDATE_TICKET_TYPE:
      return {
        ...state,
        type: action.ticketType,
      };

    case UPDATE_TICKET_STATE:
      return {
        ...state,
        state: action.ticketState,
      };

    default:
      return state;
  }
}

export default NewTicketReducer;
