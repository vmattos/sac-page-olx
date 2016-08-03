
class Ticket {
  constructor(body) {
    this.type = body.type;
    this.state = body.state;
    this.reason = body.reason;
    this.details = body.details;
    this.date = new Date();
  }
}

export default Ticket;
