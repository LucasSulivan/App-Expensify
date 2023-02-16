import React from "react";
import { shallow } from "enzyme";
import {LoginPage} from "../../Components/LoginPage";

test('should test component LoginPage',()=>{
  const wrapper = shallow(<LoginPage />)
  expect(wrapper).toMatchSnapshot()
});

test('should call startLogin on button',()=>{
  const startLogin = jest.fn()
  const wrapper = shallow(<LoginPage startLogin={startLogin} />)
  wrapper.find('button').simulate('click')
  expect(startLogin).toHaveBeenCalled();
});