import React from "react";
import { shallow } from "enzyme";
import {EditExpensePage} from '../../Components/editExpensePage';
import expense from '../../tests/actions/fixtures/expenses';

let startEditExpense,startRemoveExpense,history,wrapper;


beforeEach(()=>{
  startEditExpense = jest.fn()
  startRemoveExpense = jest.fn()
  history = {push: jest.fn()}
  wrapper = shallow(<EditExpensePage startEditExpense={startEditExpense} 
    startRemoveExpense={startRemoveExpense} 
    history={history} 
    expense={expense[2]}/>)
});

test('should render EditExpensePage',()=>{
expect(wrapper).toMatchSnapshot();
});

test('should handle edit expense page',()=>{
  wrapper.find('ExpenseForm').prop('onSubmit')(expense[2])
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(startEditExpense).toHaveBeenLastCalledWith(expense[2].id,expense[2]);
})

test('should handle startRemoveExpense expense',()=>{
  wrapper.find('button').simulate('click')
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(startRemoveExpense).toHaveBeenLastCalledWith({
    id:expense[2].id
  });
})

