
class TicketDao {
  persist(ticket, callback) {
    const data = { _id: undefined };
    callback(null, data);
  }
}

export default new TicketDao();
