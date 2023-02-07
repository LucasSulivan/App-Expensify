import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';
import ExpensesSummary from './ExpensesSummary';

const ExpensiveDashBoardPage = () =>(
  <div>
    <ExpensesSummary />
    <ExpenseList />
    <ExpenseListFilter />
  </div>
  );
  
  export default ExpensiveDashBoardPage;