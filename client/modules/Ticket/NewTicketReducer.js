import { UPDATE_TICKET_TYPE } from './NewTicketActions';

const initialState = {}

const NewTicketReducer = (state = initialState, action) => {
  switch(action.type) {

    case UPDATE_TICKET_TYPE:
      return {
        ...state,
        type: action.ticketType,
      };

    default:
      return state;
  }
}

export default NewTicketReducer;
