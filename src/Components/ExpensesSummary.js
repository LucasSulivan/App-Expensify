import React from "react"
import { connect } from "react-redux"
import numeral from "numeral"
import selectExpenses from "../selectors/expenses"
import selectExpensesTotal from "../selectors/expenses-total"

export const ExpensesSummary = ({ expensesCount, expenseTotal})=>{
  const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(expenseTotal / 100).format('$0,0.00');
  return (
    <div>
      <h1>Viewing {expensesCount} {expenseWord} totalling {formattedExpensesTotal} </h1>
    </div>
  )
}

const mapStatetoProp = (state)=>{
  const visibleExpenses = selectExpenses(state.expenses, state.filters)

  return {
    expensesCount: visibleExpenses.length,
    expenseTotal: selectExpensesTotal(visibleExpenses)
  }
};



export default connect(mapStatetoProp)(ExpensesSummary)