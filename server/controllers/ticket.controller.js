import TicketForm from '../models/ticketForm.model';
import Ticket from '../models/ticket.model';
import ticketFormDao from '../db/ticketForm.dao';
import ticketDao from '../db/ticket.dao';

export function newTicketForm(req, res, next) {
  ticketFormDao.getForm(function(err, formData) {
    if(err) {
      return next(err);
    }

    const ticketForm = new TicketForm(formData);
    res.json(ticketForm.buildForm());
  });
}

export function newTicket(req, res, next) {
  const ticket = new Ticket(req.body);
  ticketDao.persist(ticket, function(err, ticketData) {
    if(err) {
      return next(err);
    }

    delete ticketData._id;
    res.status(201).json(ticketData);
  });
}

export function listTickets(req, res, next) {
  ticketDao.getTickets(function(err, tickets){
    if(err) {
      return next(err);
    }

    res.json(tickets);
  });
}
