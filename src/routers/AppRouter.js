import React from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom'
import ExpensiveDashBoardPage from '../Components/expensiveDashBoard'
import AddExpensePage from '../Components/addExpensePage'
import EditExpensePage from '../Components/editExpensePage'
import HelpPage from '../Components/helpPage'
import NotFoundPage from '../Components/notFoundPage'
import Header from '../Components/header'

  const AppRouter = ()=> (
    <BrowserRouter>
    <div>
      <Header />
      <Switch>
      <Route path = "/" component={ExpensiveDashBoardPage} exact={true} />
      <Route path ="/create" component = {AddExpensePage}/>
      <Route path="/edit/:id" component={EditExpensePage}/>
      <Route path="/help" component={HelpPage}/>
      <Route component={NotFoundPage}/>
    </Switch>
    </div>
  
    </BrowserRouter>
  
  );

  export default AppRouter