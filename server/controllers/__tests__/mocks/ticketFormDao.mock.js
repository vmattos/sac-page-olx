
class TicketFormDao {
  getForm(callback) {
    const form = {
      types: [],
      states: [],
      reasons: [],
    }

    callback(null, form)
  }
}

export default new TicketFormDao();
