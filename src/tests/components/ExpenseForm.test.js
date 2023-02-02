import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../Components/ExpenseForm';
import expense from '../../tests/actions/fixtures/expenses';

test('should render expense form correctly',()=>{
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot();
});

test('should render expense form with expense data',()=>{
  const wrapper = shallow(<ExpenseForm expense={expense[1]}/>)
  expect(wrapper).toMatchSnapshot();
});

/* test('should render error for invalid form submission', ()=>{
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('form').simulate('submit',{
    preventDefault: ()=> {}
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0)
  expect(wrapper).toMatchSnapshot();
});
 */

test('should set description on input change',()=>{
  const value = 'New Description';
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('input').at(0).simulate('change',{
    target: { value }
  });
  expect(wrapper.state('description')).toBe(value);
});

test('should set note on text area change',()=>{
  const value = 'New Note'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('textarea').simulate('change',{
    target: { value }
  });
  expect(wrapper.state('note')).toBe(value)
});

test('should set amount if valid value',()=>{
  const value = '23.50'
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change',{
    target: { value }
  });
  expect(wrapper.state('amount')).toEqual(value)
});

test('should set amount if invalid value',()=>{
  const value = '12.122'
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change',{
    target: { value }
  });
  expect(wrapper.state('amount')).toEqual('')
});

test('should call onSubmit prop for valid form submission',()=>{
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expense[0]} onSubmit={onSubmitSpy}/>);
  wrapper.find('form').simulate('submit', {
    preventDefault: ()=>{ }
  });
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expense[0].description,
    amount: expense[0].amount,
    note: expense[0].note,
    createdAt: expense[0].createdAt
  });
});

test('should set new date on date change',()=>{
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now)
});

test('should set new calendar focused',()=>{
  const focused = true
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('SingleDatePicker').prop('onFocusChange')({focused})
  expect(wrapper.state('calendarFocused')).toEqual(focused)
});