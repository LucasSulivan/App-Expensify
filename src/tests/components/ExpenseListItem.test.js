import React from "react";
import { shallow } from "enzyme";
import ExpenseListItems from '../../Components/ExpensesListItem';
import expense from '../../tests/actions/fixtures/expenses';

test('should render expense list item with expenses',()=>{
  
  const wrapper = shallow(<ExpenseListItems {...expense[0]} />)
  expect(wrapper).toMatchSnapshot();
})
