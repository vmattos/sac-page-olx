
export const UPDATE_TICKET_TYPE = 'UPDATE_TICKET_TYPE';
export const UPDATE_TICKET_STATE = 'UPDATE_TICKET_STATE';
export const UPDATE_TICKET_REASON = 'UPDATE_TICKET_REASON';
export const UPDATE_TICKET_DETAILS = 'UPDATE_TICKET_DETAILS';

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

export function updateTicketReason(reason) {
  return {
    type: UPDATE_TICKET_REASON,
    reason,
  }
}

export function updateTicketDetails(details) {
  return {
    type: UPDATE_TICKET_DETAILS,
    details,
  }
}

export function updateState(field) {
  switch(field) {
    case 'type':    return updateTicketType;
    case 'state':   return updateTicketState;
    case 'reason':  return updateTicketReason;
    case 'details': return updateTicketDetails;
  };
}
