import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import expensesReducers from '../reducers/expenses';
import filterReducer from '../reducers/filters';
import authReducer from '../reducers/auth';

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () =>{
  const store = createStore(combineReducers({
    expenses: expensesReducers,
    filters: filterReducer,
    auth: authReducer
  }),
    composeEnhacers(applyMiddleware(thunk))
  );
  return store;
};


