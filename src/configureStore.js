import { createStore, applyMiddleware, combineReducers } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const configureStore = ({ initialState = {}, history }) => {

  const reducer = combineReducers({
    routing: routerReducer,
    app: reducers
  });

  const middlewares = [
    routerMiddleware(history),
    thunk
  ];

  return createStore(
    reducer,
    initialState,
    applyMiddleware(...middlewares),
  );
};

export default configureStore;
