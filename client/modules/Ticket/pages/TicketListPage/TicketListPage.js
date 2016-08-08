import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { fetchTickets } from '../../TicketListActions';

class TicketListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchTickets());
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

// Needed to load tickets on server side rendering!
TicketListPage.need = [() => { return fetchTickets(); }];

function mapStateToProps(state) {
  return {
    tickets: state.tickets,
  }
}

TicketListPage.propTypes = {
  tickets: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
}

TicketListPage.contextTypes = {
  router: PropTypes.object,
}

export default connect(mapStateToProps)(TicketListPage);
