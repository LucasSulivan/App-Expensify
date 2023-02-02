import React from "react";
import { shallow } from "enzyme";
import NotFoundPage from "../../Components/notFoundPage";

test('should render notfoundpage correctly',()=>{
  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper).toMatchSnapshot();
})