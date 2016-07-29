import { combineReducers } from 'redux';

import app from './modules/App/AppReducer';
import intl from './modules/Intl/IntlReducer';

export default combineReducers({
  app,
  intl,
});
