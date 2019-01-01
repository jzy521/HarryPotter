import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import fooReducer from './foo-reducer';

export default combineReducers({
  fooReducer,
  routing: routerReducer
});
