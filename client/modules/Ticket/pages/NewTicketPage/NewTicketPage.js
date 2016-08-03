import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { updateState, postForm } from '../../NewTicketActions';
import { fetchForm } from '../../NewTicketFormActions';

import NewTicketForm from '../../components/NewTicketForm/NewTicketForm';


class NewTicketPage extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(fetchForm());
  }

  handleSubmit(e) {
    e.preventDefault();
    const newTicket = this.props.newTicket;
    this.props.dispatch(postForm(newTicket));
  }

  handleSelect(e) {
    const target = e.nativeEvent.target
    this.props.dispatch(updateState(target.name)(target.value))
  }

  render() {
    return (
      <div>
        <NewTicketForm
          form={ this.props.form }
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
    form: state.newTicketForm,
    newTicket: state.newTicket,
  };
}

NewTicketPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

NewTicketPage.contextTypes = {
  router: PropTypes.object,
}

export default connect(mapStateToProps)(NewTicketPage);
