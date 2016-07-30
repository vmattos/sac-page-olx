import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import NewTicketForm from '../../NewTicketForm/NewTicketForm';

class NewTicketPage extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(e.nativeEvent)
  }

  handleSelect(e) {
    const target = e.nativeEvent.target
    console.log(target.name, target.value)
  }

  render() {
    return (
      <div>
        <NewTicketForm
          handleSubmit={ this.handleSubmit }
          handleSelect={ this.handleSelect }
        />
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
