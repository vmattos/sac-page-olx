import test from 'ava';
import mock from 'mock-require';

import ticketFormDaoMock from './mocks/ticketFormDao.mock';
import ticketDaoMock from './mocks/ticketDao.mock';
import TicketController from '../ticket.controller'

const ticketController = new TicketController(ticketFormDaoMock, ticketDaoMock);

test('newTicketForm should return form fields', t => {
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

test('newTicket should return a 201 status', t => {
  const req = {
    body: {}
  };
  const res = {
      status: function(code) {
        t.is(code, 201);
        return this;
      },
      json: function(){},
    }

    ticketController.newTicket(req, res, null);
});

test('listTickets should return a list of tickets', t => {
  const req = {},
    res = {
      json: function(json) {
        t.is(json.length, 1)
      }
    };

    ticketController.listTickets(req, res, null);
});
