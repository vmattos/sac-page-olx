import TicketForm from '../models/ticketForm.model';
import Ticket from '../models/ticket.model';
import ticketFormDao from '../db/ticketForm.dao';
import ticketDao from '../db/ticket.dao';

export function newTicketForm(req, res, next) {
  ticketFormDao.getForm(function(err, doc) {
    if(err) {
      return next(err);
    }

    const ticketForm = new TicketForm(doc);
    res.json(ticketForm.buildForm());
  });
}

export function newTicket(req, res) {
  const ticket = new Ticket(req.body);
  ticketDao.persist(ticket, function(err, doc) {
    if(err) {
      return next(err);
    }

    delete doc._id;
    res.status(201).json(doc);
  });
}

export function listTickets(req, res) {
  ticketDao.getTickets(function(err, docs){
    if(err) {
      return next(err);
    }

    res.json(docs);
  });
}
