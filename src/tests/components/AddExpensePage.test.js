import React from "react";
import { shallow } from "enzyme";
import { AddExpensePage } from "../../Components/addExpensePage";
import expense from '../../tests/actions/fixtures/expenses';

let startAddExpense, history, wrapper;

beforeEach(()=>{
  startAddExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />);
})

test('should render add expense page correctly',()=>{
  expect(wrapper).toMatchSnapshot();
});

test('should handler onSubmit',()=>{
  wrapper.find('ExpenseForm').prop('onSubmit')(expense[1])
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(startAddExpense).toHaveBeenLastCalledWith(expense[1]);
});