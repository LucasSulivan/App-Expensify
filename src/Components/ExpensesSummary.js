import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import numeral from "numeral"
import selectExpenses from "../selectors/expenses"
import selectExpensesTotal from "../selectors/expenses-total"

export const ExpensesSummary = ({ expensesCount, expenseTotal})=>{
  const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(expenseTotal / 100).format('$0,0.00');
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{expensesCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span> </h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
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