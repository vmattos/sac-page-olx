import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import NewTicketForm from '../../NewTicketForm/NewTicketForm';

class NewTicketPage extends Component {
  render() {
    return (
      <div>
        <NewTicketForm />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

NewTicketPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

NewTicketPage.contextTypes = {
  router: PropTypes.object,
}

export default connect(mapStateToProps)(NewTicketPage);
