
export const UPDATE_TICKET_TYPE = 'UPDATE_TICKET_TYPE';
export const UPDATE_TICKET_STATE = 'UPDATE_TICKET_STATE';

export function updateTicketType(ticketType) {
  return {
    type: UPDATE_TICKET_TYPE,
    ticketType,
  }
}

export function updateTicketState(ticketState) {
  return {
    type: UPDATE_TICKET_STATE,
    ticketState,
  }
}

export function updateState(field) {
  switch(field) {
    case 'type':
      return updateTicketType;

    case 'state':
      return updateTicketState;
  };
}
