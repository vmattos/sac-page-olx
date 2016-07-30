
export const UPDATE_TICKET_TYPE = 'UPDATE_TICKET_TYPE';

export function updateTicketType(ticketType) {
  return {
    type: UPDATE_TICKET_TYPE,
    ticketType,
  }
}
