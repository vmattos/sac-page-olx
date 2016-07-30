import { combineReducers } from 'redux';

import app from './modules/App/AppReducer';
import intl from './modules/Intl/IntlReducer';
import newTicket from './modules/Ticket/NewTicketReducer';

export default combineReducers({
  app,
  intl,
  newTicket,
});
