import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component{
  onSubmit = (expense) =>{
    this.props.addExpense(expense);
    this.props.history.push('/')
  };
  render(){
    return (
      <div>
        This is from my add expense component
        <ExpenseForm
          onSubmit= {this.onSubmit}
        />
      </div>
    )
  }

}

const mapDispatchtoProps = ()=> ({
  addExpense: (expense)=> dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchtoProps)(AddExpensePage)