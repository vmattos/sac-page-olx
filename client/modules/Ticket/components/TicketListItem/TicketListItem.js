import React, { Component } from 'react';

class TicketListItem extends Component {
  componentWillMount() {
    this.date = this.formatDate(this.props.ticket.date);
  }

  render() {
    const {
      ticket,
    } = this.props;

    return (
      <div>
        <p>{ ticket.type }</p>
        <p>{ ticket.state }</p>
        <p>{ ticket.reasons }</p>
        <p>{ ticket.details }</p>
        <p>{ ticket.details }</p>
        <p>{ this.date }</p>
      </div>
    );
  }

  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleString();
  }
}

export default TicketListItem;
