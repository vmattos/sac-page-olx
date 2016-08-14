import TicketForm from '../models/ticketForm.model';
import Ticket from '../models/ticket.model';

class TicketController {
  constructor(ticketFormDao, ticketDao) {
    this.ticketFormDao = ticketFormDao;
    this.ticketDao = ticketDao;

    this.newTicketForm = this.newTicketForm.bind(this);
    this.newTicket = this.newTicket.bind(this);
    this.listTickets = this.listTickets.bind(this);
  }

  newTicketForm(req, res, next) {
    this.ticketFormDao.getForm(function(err, formData) {
      if(err) {
        return next(err);
      }

      const ticketForm = new TicketForm(formData);
      res.json(ticketForm.buildForm());
    });
  }

  newTicket(req, res, next) {
    const ticket = new Ticket(req.body);
    this.ticketDao.persist(ticket, function(err, ticketData) {
      if(err) {
        return next(err);
      }

      delete ticketData._id;
      res.status(201).json(ticketData);
    });
  }

  listTickets(req, res, next) {
    this.ticketDao.getTickets(function(err, tickets){
      if(err) {
        return next(err);
      }

      res.json(tickets);
    });
  }
}

export default TicketController;
