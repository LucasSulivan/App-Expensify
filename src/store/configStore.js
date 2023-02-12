import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import expensesReducers from '../reducers/expenses';
import filterReducer from '../reducers/filters';
import thunk from "redux-thunk";

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () =>{
  const store = createStore(combineReducers({
    expenses: expensesReducers,
    filters: filterReducer 
  }),
    composeEnhacers(applyMiddleware(thunk))
  );
  return store;
};


