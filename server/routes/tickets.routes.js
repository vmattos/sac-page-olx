import { Router } from 'express';
import TicketController from '../controllers/ticket.controller';
import ticketFormDao from '../db/ticketForm.dao';
import ticketDao from '../db/ticket.dao';

const ticketController = new TicketController(ticketFormDao, ticketDao);

const router = new Router();

router.route('/ticket/newTicketForm').get(ticketController.newTicketForm);

router.route('/ticket/')
  .get(ticketController.listTickets)
  .post(ticketController.newTicket);

export default router;
