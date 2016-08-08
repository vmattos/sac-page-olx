import React, { Component } from 'react';

class TicketList extends Component {

  render() {
    const { tickets } = this.props;

    return (
      <div>
        {
          tickets.map((ticket, i) => (
            <div>
            <p>{ ticket.type }</p>
            <p>{ ticket.state }</p>
            <p>{ ticket.reasons }</p>
            <p>{ ticket.details }</p>
            <p>{ ticket.details }</p>
            <p>{ ticket.date }</p>
            </div>
          ))
        }
      </div>
    );
  }
}

export default TicketList;
