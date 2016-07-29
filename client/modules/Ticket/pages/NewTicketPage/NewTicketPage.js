import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

class NewTicketPage extends Component {
  render() {
    return (
      <div>
        <h1>NewTicketPage</h1>
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
