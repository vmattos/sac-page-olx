import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './modules/App/App';

import NewTicketPage from './modules/Ticket/pages/NewTicketPage/NewTicketPage';

export default (
  <Route path="/" component={App} >
    <Route
      path="/new"
      component={NewTicketPage}
    />
  </Route>
);
