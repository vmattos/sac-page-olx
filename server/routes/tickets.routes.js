import { Router } from 'express';
import * as TicketController from '../controllers/ticket.controller';
const router = new Router();

router.route('/ticket/newTicketForm').get(TicketController.newTicketForm);

router.route('/ticket/')
  .get(TicketController.listTickets)
  .post(TicketController.newTicket);

export default router;
