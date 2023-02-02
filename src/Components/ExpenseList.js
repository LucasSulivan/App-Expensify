import React from "react";
import { connect } from "react-redux";
import ExpenseListItems from './ExpensesListItem'
import selectExpenses from '../selectors/expenses';


export const ExpenseList = (props)=>(
  <div>
  <h1>Expense List</h1>
  {
    props.expenses.length === 0 ? (
      <p>   </p>
    ) : (
      props.expenses.map((expense)=>{
        return <ExpenseListItems key={expense.id} {...expense} />
      })
    )
  }
  {}

  </div>
);

const mapStateToProps = (state)=>{
  return {
    expenses: selectExpenses(state.expenses,state.filters)
  }
};


export default connect(mapStateToProps)(ExpenseList)