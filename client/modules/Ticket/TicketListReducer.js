import { LOAD_TICKETS } from './TicketListActions';

const initialState = [];

const TicketListReducer = (state = initialState, action) => {
  switch(action.type) {

    case LOAD_TICKETS:
      return action.tickets;

    default:
      return state;
  }
}

export default TicketListReducer;
