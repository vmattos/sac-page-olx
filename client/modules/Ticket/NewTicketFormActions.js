import callApi from '../../util/apiCaller';
import { loadState } from './NewTicketActions';

export const MOUNT_FORM = 'MOUNT_FORM';

export function mountForm(form) {
  return {
    type: MOUNT_FORM,
    form,
  };
}

export function fetchForm() {
  const endpoint = 'ticket/newTicketForm'
  return (dispatch) => {
    return callApi(endpoint).then(res => {
      dispatch(mountForm(res));
      dispatch(loadState(res));
    });
  }
}
