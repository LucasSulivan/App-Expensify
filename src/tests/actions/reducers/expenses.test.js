import expenses from '../fixtures/expenses';
import expensesReducer from '../../../reducers/expenses';

test('should set default state',()=>{
  const state = expensesReducer(undefined,{type: '@@iNIT'});
  expect(state).toEqual([])
});

test('should set remove expense id',()=>{
  const action = {
    type:'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses,action)
  expect(state).toEqual([expenses[0],expenses[2]])
});

test('should not remove expense if id not found',()=>{
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses,action);
  expect(state).toEqual(expenses)
});

test('should set add expense to state',()=>{
  const expense = {
    id:"4",
    description:'New',
    note:'',
    amount: 29500,
    createdAt: 20000
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  }
  const state = expensesReducer(expenses,action)
  expect(state).toEqual([...expenses,expense]);
});

test('should set edit expense to state',()=>{
  const amount = 12900
  const action ={
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    update:{
      amount
    }
  }
  const state = expensesReducer(expenses,action);
  expect(state[0].amount).toEqual(amount)
});

test('should not edit expense if not fould id',()=>{
  const amount = 12900
  const action ={
    type: 'EDIT_EXPENSE',
    id: '-1',
    update:{
      amount
    }
  }
  const state = expensesReducer(expenses,action);
  expect(state).toEqual(expenses)
})