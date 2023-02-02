import React from "react";
import { shallow } from "enzyme";
import {EditExpensePage} from '../../Components/editExpensePage';
import expense from '../../tests/actions/fixtures/expenses';

let editExpense,removeExpense,history,wrapper;


beforeEach(()=>{
  editExpense = jest.fn()
  removeExpense = jest.fn()
  history = {push: jest.fn()}
  wrapper = shallow(<EditExpensePage editExpense={editExpense} 
    removeExpense={removeExpense} 
    history={history} 
    expense={expense[2]}/>)
});

test('should render EditExpensePage',()=>{
expect(wrapper).toMatchSnapshot();
});

test('should handle edit expense page',()=>{
  wrapper.find('ExpenseForm').prop('onSubmit')(expense[2])
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(editExpense).toHaveBeenLastCalledWith(expense[2].id,expense[2]);
})

test('should handle remove expense',()=>{
  wrapper.find('button').simulate('click')
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(removeExpense).toHaveBeenLastCalledWith({
    id:expense[2].id
  });
})

