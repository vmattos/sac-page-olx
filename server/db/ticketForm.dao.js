import datastore from 'nedb';
import config from '../config';

const collection = 'ticket-form.db';
const filename = `${config.db}${collection}`
const db = new datastore({ filename: filename, autoload: true });

class TicketFormDao {
  getForm(callback) {
    db.findOne({}, callback)
  }
}

export default new TicketFormDao();
