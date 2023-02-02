import {addExpense,editExpense,removeExpense} from '../../actions/expenses';

test('should setup remove expense action object',()=>{
  const action = removeExpense({id:'123'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123'
  })
});

test('should setup edit expense action object',()=>{
  const action = editExpense('123',{note: 'new value edited'})
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123',
    update:{note:'new value edited'}
  })
})

test('should setup add expense action object',()=>{
  const expenseData = {
    description:'Rent',
    note: 'This was last month rent',
    amount: 109500,
    createdAt: 1000
  }
 const action = addExpense(expenseData)
 expect(action).toEqual({
  type: 'ADD_EXPENSE',
  expense: {
    ...expenseData,
    id: expect.any(String)
  }
 });
});

test('should setup add expense action object',()=>{
  const action = addExpense()
  
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description : '',
      note : '',
      amount : 0,
      createdAt : 0
    }
  })
})