import React from "react";
import {ExpensesSummary} from "../../Components/ExpensesSummary";
import { shallow } from "enzyme";

test('Should correctly render ExpensesSummary with 1 expense',()=>{
  const wrapper = shallow(<ExpensesSummary expensesCount = {1} exppenseTotal = {235}/>)
  expect(wrapper).toMatchSnapshot()
});

test('Should correctly render ExpensesSummary with multiple expenses',()=>{
  const wrapper = shallow(<ExpensesSummary expensesCount = {23} exppenseTotal = {235229}/>)
  expect(wrapper).toMatchSnapshot()
});