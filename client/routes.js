import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './modules/App/App';

import NewTicketPage from './modules/Ticket/pages/NewTicketPage/NewTicketPage';
import TicketListPage from './modules/Ticket/pages/TicketListPage/TicketListPage';

export default (
  <Route path="/" component={App} >
    <IndexRoute
      component={ TicketListPage }
    />
    <Route
      path="/new"
      component={NewTicketPage}
    />
  </Route>
);
