import React, { Component } from 'react';

import TicketListItem from '../TicketListItem/TicketListItem';

class TicketList extends Component {

  render() {
    const { tickets } = this.props;

    return (
      <div>
        {
          tickets.map((ticket, i) => (
            <TicketListItem
              ticket={ ticket }
              key={ i }
            />
          ))
        }
      </div>
    );
  }
}

export default TicketList;
