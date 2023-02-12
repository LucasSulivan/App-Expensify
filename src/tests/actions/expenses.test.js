import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {startAddExpense,addExpense,editExpense,removeExpense} from '../../actions/expenses';
import expenses from '../actions/fixtures/expenses';
import  database  from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

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
  const action = addExpense(expenses[2])
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  })
});

test('should setup add expense to database and store',(done)=>{
  const store = createMockStore({});
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is better',
    createdAt: 1000
  }
  store.dispatch(startAddExpense(expenseData)).then(()=>{
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });
    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot)=>{
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });
});


test('should setup add expense with defaults and store',(done)=>{
  const store = createMockStore({});
  const expenseDataDefault = {
    description : '',
    note : '',
    amount : 0,
    createdAt : 0
  }

  store.dispatch(startAddExpense({})).then(()=>{
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseDataDefault
      }
    });
    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot)=>{
    expect(snapshot.val()).toEqual(expenseDataDefault);
    done();
  });
});
/* test('should setup add expense action object',()=>{
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
}); */