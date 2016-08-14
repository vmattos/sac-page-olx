import { combineReducers } from 'redux';

import intl from './modules/Intl/IntlReducer';
import newTicket from './modules/Ticket/NewTicketReducer';
import newTicketForm from './modules/Ticket/NewTicketFormReducer';
import tickets from './modules/Ticket/TicketListReducer';

export default combineReducers({
  intl,
  newTicket,
  newTicketForm,
  tickets,
});
