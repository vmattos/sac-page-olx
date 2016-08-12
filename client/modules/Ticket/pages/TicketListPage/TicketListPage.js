import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { fetchTickets } from '../../TicketListActions';

import TicketList from '../../components/TicketList/TicketList';

class TicketListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchTickets());
  }

  render() {
    const { tickets } = this.props;

    return (
      <TicketList tickets={ tickets } />
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
