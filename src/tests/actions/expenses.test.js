import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {startAddExpense,
  addExpense,
  editExpense,
  removeExpense, 
  setExpenses, 
  startSetExpenses,
  startRemoveExpense,
  startEditExpense} from '../../actions/expenses';
import expenses from '../actions/fixtures/expenses';
import database  from '../../firebase/firebase';

const uid = 'thisismytestuid';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach((done)=>{
  const expenseData = {};
  expenses.forEach(({ id,description,note,amount,createdAt })=>{
    expenseData[id] = {description,note,amount,createdAt}
  });
  database.ref(`users/${uid}/expenses`).set(expenseData).then(()=> done());
});

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
    update:{
      note:'new value edited'
    }
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
  const store = createMockStore(defaultAuthState);
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
    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot)=>{
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });
});


test('should setup add expense with defaults and store',(done)=>{
  const store = createMockStore(defaultAuthState);
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
    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot)=>{
    expect(snapshot.val()).toEqual(expenseDataDefault);
    done();
  });
});

test('should setup set expense action object with data ',()=>{
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  });
});

test('should fetch the expenses from firebase',(done)=>{
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetExpenses()).then(()=>{
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    });
    done();
  });
});

test('should remove expenses from firebase',(done)=>{
  const store = createMockStore(defaultAuthState);
  const id = expenses[2].id;
  store.dispatch(startRemoveExpense({id})).then(()=>{
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id
    });
    return database.ref(`users/${uid}/expenses/${id}`).once('value');
  }).then((snapshot)=>{
    expect(snapshot.val()).toBeFalsy();
    done();
  });
});

test('should test edit expenses from firebase',(done)=>{
  const store = createMockStore(defaultAuthState);
  const id = expenses[0].id
  const update = {amount: 21045}
  store.dispatch(startEditExpense(id, update)).then(()=>{
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'EDIT_EXPENSE',
      id,
      update
    });
    return database.ref(`users/${uid}/expenses/${id}`).once('value');
  }).then((snapshot)=>{
    expect(snapshot.val().amount).toBe(update.amount);
    done();
  });
});