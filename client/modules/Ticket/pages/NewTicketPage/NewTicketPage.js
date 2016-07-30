import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { updateState } from '../../NewTicketActions';

import NewTicketForm from '../../NewTicketForm/NewTicketForm';

class NewTicketPage extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(e.nativeEvent)
  }

  handleSelect(e) {
    const target = e.nativeEvent.target
    this.props.dispatch(updateState(target.name)(target.value))
  }

  render() {
    return (
      <div>
        <NewTicketForm
          type={ this.props.type }
          handleSubmit={ this.handleSubmit }
          handleSelect={ this.handleSelect }
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    type: state.type,
  };
}

NewTicketPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

NewTicketPage.contextTypes = {
  router: PropTypes.object,
}

export default connect(mapStateToProps)(NewTicketPage);
