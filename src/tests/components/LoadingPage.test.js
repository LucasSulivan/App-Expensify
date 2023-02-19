import React from "react";
import { shallow } from "enzyme";
import LoadingPage from "../../Components/LoadingPage";

test('should test the Loading component page',()=>{
  const wrapper = shallow(<LoadingPage />)
  expect(wrapper).toMatchSnapshot();
})