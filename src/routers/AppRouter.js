import React from 'react';
import { Router, Route,Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import ExpensiveDashBoardPage from '../Components/expensiveDashBoard'
import AddExpensePage from '../Components/addExpensePage'
import EditExpensePage from '../Components/editExpensePage'
import HelpPage from '../Components/helpPage'
import NotFoundPage from '../Components/notFoundPage'
import LoginPage from '../Components/LoginPage';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

  const AppRouter = ()=> (
    <Router history= {history}>
    <div>
      <Switch>
      <Route path = "/" component={LoginPage} exact={true} />
      <PrivateRoute path = "/dashboard" component={ExpensiveDashBoardPage} />
      <PrivateRoute path ="/create" component = {AddExpensePage}/>
      <PrivateRoute path="/edit/:id" component={EditExpensePage}/>
      <Route path="/help" component={HelpPage}/>
      <Route component={NotFoundPage}/>
    </Switch>
    </div>
  
    </Router>
  
  );

  export default AppRouter