import {
    UPDATE_TICKET_TYPE,
    UPDATE_TICKET_STATE,
    UPDATE_TICKET_REASON,
    UPDATE_TICKET_DETAILS,
    LOAD_STATE,
  } from './NewTicketActions';

const initialState = {
  type: [],
  state: [],
  reason: [],
  details: '',
}

const NewTicketReducer = (state = initialState, action) => {
  switch(action.type) {

    case LOAD_STATE:
      return {
        type: action.ticketType,
        state: action.ticketState,
        reason: action.reason,
        details: action.details,
      };

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

    case UPDATE_TICKET_REASON:
      return {
        ...state,
        reason: action.reason,
      };

    case UPDATE_TICKET_DETAILS:
      return {
        ...state,
        details: action.details,
      };

    default:
      return state;
  }
}

export default NewTicketReducer;
