import datastore from 'nedb';
import config from '../config';

const collection = 'tickets.db';
const filename = `${config.db}${collection}`;
const db = new datastore({ filename: filename, autoload: true });

class TicketDao {
  persist(ticket, callback) {
    db.insert(ticket, callback);
  }

  getTickets(callback) {
    db.find({}, callback);
  }
}

export default new TicketDao();
