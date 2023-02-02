import moment from 'moment';
import filterReducer from '../../../reducers/filters';

test('should setup default values',()=>{
  const state = filterReducer(undefined,{type: '@@UNIT'})
  expect(state).toEqual({
    text: '',
    sortBy:'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
});

test('should set sortBy to amount ',()=>{
  const state = filterReducer(undefined,{type: 'SORT_BY_AMOUNT'})
  expect(state.sortBy).toBe('Amount')
});

test('should set sortBy to action',()=>{
  const currentState = {
    text:'',
    startDate: undefined,
    endDate:undefined,
    sortBy:'amount'
  }
  const action = {type:'SORT_BY_DATE'}
  const state = filterReducer(currentState,action)
  expect(state.sortBy).toBe('Date')
});

test('should set text to action',()=>{
  const text = 'Test'
 
  const action = {
    type:'SET_FILTER',
    text
  }
  const state = filterReducer(undefined,action)
  expect(state.text).toBe(text)
})

test('should set start date to action',()=>{
 const startDate =  moment()
  const action = {
    type:'SET_START_DATE',
    startDate
  }
  const state = filterReducer(undefined,action)
  expect(state.startDate).toBe(startDate)
});


test('should set end date to action',()=>{
  const endDate =  moment()
   const action = {
     type:'SET_END_DATE',
     endDate
   }
   const state = filterReducer(undefined,action)
   expect(state.endDate).toBe(endDate)
 });