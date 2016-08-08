import callApi from '../../util/apiCaller';

export const LOAD_TICKETS = 'LOAD_TICKETS';

export function loadTickets(tickets) {
  return {
    type: LOAD_TICKETS,
    tickets,
  };
}

export function fetchTickets() {
  const endpoint = 'ticket';
  return (dispatch) => {
    return callApi(endpoint).then(res => {
      dispatch(loadTickets(res))
    });
  }
}
