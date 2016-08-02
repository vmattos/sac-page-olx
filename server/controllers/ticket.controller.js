import TicketForm from '../models/ticketForm.model';

export function newTicketForm(req, res) {
  const ticketForm = new TicketForm();
  res.json(ticketForm.buildForm());
}
