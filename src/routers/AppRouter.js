import React from 'react';
import { Router, Route,Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import ExpensiveDashBoardPage from '../Components/expensiveDashBoard'
import AddExpensePage from '../Components/addExpensePage'
import EditExpensePage from '../Components/editExpensePage'
import NotFoundPage from '../Components/notFoundPage'
import LoginPage from '../Components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

  const AppRouter = ()=> (
    <Router history= {history}>
    <div>
      <Switch>
      <PublicRoute path = "/" component={LoginPage} exact={true} />
      <PrivateRoute path = "/dashboard" component={ExpensiveDashBoardPage} />
      <PrivateRoute path ="/create" component = {AddExpensePage}/>
      <PrivateRoute path="/edit/:id" component={EditExpensePage}/>
      <Route component={NotFoundPage}/>
    </Switch>
    </div>
  
    </Router>
  
  );

  export default AppRouter