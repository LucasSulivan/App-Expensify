import moment from 'moment';
import {setStartDate,setEndDate,sortByDate,sortByAmount,setTextFilter} from '../../actions/filters';

test('should test set start date action object',()=>{
  const action = setStartDate(moment(0))
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('should test set end date action object',()=>{
  const action = setEndDate(moment(0))
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test('should test sort by date action object',()=>{
  expect(sortByDate()).toEqual({    type: 'SORT_BY_DATE'});
});

test('should test sort by amount action object',()=>{
expect(sortByAmount()).toEqual({type: 'SORT_BY_AMOUNT'});
});

test('should test set text filter action object',()=>{
const text = 'Testing'
const action = setTextFilter(text)
expect(action).toEqual({
  type: 'SET_FILTER',
  text
})
});

test('should generate set text action object',()=>{
  const action = setTextFilter()
  expect(action).toEqual({
    type:'SET_FILTER',
    text:''
  })
})


test('should test set text filter action object',()=>{})