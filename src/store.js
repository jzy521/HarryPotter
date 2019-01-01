import { createStore, compose } from 'redux';
import reducers from './reducers';

// create the redux store with redux devtools mixed in
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers);

export default store;
