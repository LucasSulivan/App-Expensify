import React from "react";
import { shallow } from "enzyme";
import { AddExpensePage } from "../../Components/addExpensePage";
import expense from '../../tests/actions/fixtures/expenses';

let addExpense, history, wrapper;

beforeEach(()=>{
  addExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />);
})

test('should render add expense page correctly',()=>{
  expect(wrapper).toMatchSnapshot();
});

test('should handler onSubmit',()=>{
  wrapper.find('ExpenseForm').prop('onSubmit')(expense[1])
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(addExpense).toHaveBeenLastCalledWith(expense[1]);
});