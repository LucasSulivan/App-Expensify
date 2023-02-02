import React from "react";
import { shallow } from "enzyme";
import ExpensiveDashBoard from '../../Components/expensiveDashBoard';

test('should render expensivedashboard page',()=>{
  const wrapper = shallow(<ExpensiveDashBoard />)
  expect(wrapper).toMatchSnapshot();
});