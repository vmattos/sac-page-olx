import test from 'ava';
import mock from 'mock-require';

import ticketFormDaoMock from './mocks/ticketFormDao.mock';
import TicketController from '../ticket.controller'

const ticketController = new TicketController(ticketFormDaoMock, null);

test.serial('newTicketForm should return form fields', t => {
  const req = {},
    res = {
      json: function(json) {
        t.is(json.types.length, 0)
        t.is(json.states.length, 0)
        t.is(json.reasons.length, 0)
      }
    }

  ticketController.newTicketForm(req, res, null);
});
