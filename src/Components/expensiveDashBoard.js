import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';

const ExpensiveDashBoardPage = () =>(
  <div>
    This is from my dashboard component
    <ExpenseList />
    <ExpenseListFilter />
  </div>
  );
  
  export default ExpensiveDashBoardPage;