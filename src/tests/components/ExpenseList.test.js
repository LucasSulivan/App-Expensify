import React from "react";
import { shallow } from "enzyme";
import { ExpenseList } from '../../Components/ExpenseList';
import expenses from '../../tests/actions/fixtures/expenses'

test('should render ExpenseList with expenses',()=>{
const wrapper = shallow(<ExpenseList expenses={expenses} />);
expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseList with empty',()=>{
const wrapper = shallow(<ExpenseList expenses={[]} />);
expect(wrapper).toMatchSnapshot();
})