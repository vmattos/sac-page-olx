import TicketForm from '../models/ticketForm.model';
import ticketFormDao from '../db/ticketForm.dao';

export function newTicketForm(req, res) {
  ticketFormDao.getForm(function(err, doc) {
    if(err) {
      return next(err);
    }

    const ticketForm = new TicketForm(doc);
    res.json(ticketForm.buildForm());
  });
}
