import { Router } from 'express';
import * as TicketController from '../controllers/ticket.controller';
const router = new Router();

router.route('/ticket/newTicketForm').get(TicketController.newTicketForm);

router.route('/ticket/')
  .post(TicketController.newTicket)
  .get(TicketController.listTickets);


export default router;
