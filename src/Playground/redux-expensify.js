import { createStore, combineReducers } from "redux";
import uuid from 'uuid';

const addExpense = (
  {
  description = '',
  note = '',
  amount = 0,
  createdAt = 0
  } = {})=>({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

const removeExpense = ({ id } = {})=>({
  type: 'REMOVE_EXPENSE',
  id

});

const editExpense = (id, update) =>({
  type: 'EDIT_EXPENSE',
  id,
  update
}
);

const expensesReducersDefaultState = []

const expensesReducers =(state = expensesReducersDefaultState, action)=> {
  switch (action.type){
    case 'ADD_EXPENSE':
      return [
          ...state,
          action.expense
        ];
    case 'REMOVE_EXPENSE':
      return state.filter(( id )=> id !== action.id);

    case 'EDIT_EXPENSE':
      return state.map((expense)=>{
        if(expense.id === action.id){
          return {
            ...expense,
            ...action.update
          }
        }else{
          return expense
        }
      })
    default:
      return state
  };
};

const filterReducerDefault = {
  text: '',
  sortBy:'date',
  startDate: undefined,
  endDate: undefined
};

//FILTER

const setTextFilter = (
  text = ''
)=>({
type: 'SET_FILTER',
text
});

const sortByAmount = () =>({
type: 'SORT_BY_AMOUNT'
});

const sortByDate =()=>({
  type: 'SORT_BY_DATE'
});

const setStartDate =( startDate )=>({
  type: 'SET_START_DATE',
  startDate
});

const setEndDate = (endDate) => ({
type: "SET_END_DATE",
endDate
});

//Get Visible Expenses

const getVisibleExpenses = (expenses, {text,sortBy,startDate,endDate})=> {
  return expenses.filter((expense)=>{
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

    return startDateMatch && endDateMatch && textMatch
  }).sort((a,b)=>{
    if(sortBy === 'date'){
      return a.createdAt < b.createdAt ? 1 : -1;
    }
    else if (sortBy === 'amount'){
      return a.amount < b.amount ? 1:-1;
    };
  });
};


const filterReducer =(state =filterReducerDefault,action )=>{
  switch (action.type){
    case 'SET_FILTER':
      return {
        ...state,
        text:action.text
      };
    case "SORT_BY_AMOUNT":
      return {...state, sortBy:'Amount'};
    
    case "SORT_BY_DATE":
      return {...state, sortBy: 'Date'};

    case "SET_START_DATE":
      return {
        ...state,
       startDate: action.startDate
      };
      case "SET_END_DATE":
        return {
          ...state,
         endDate: action.endDate
        }
    default:
      return state
  }
};


const store = createStore(combineReducers({
  expenses: expensesReducers,
  filters: filterReducer 
}))




store.subscribe(()=>{
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses,state.filters)
  console.log(visibleExpenses)
})
//EXPENSE
 const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt:-21000}))
const ExpenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300,createdAt: -1000}))
/*store.dispatch(removeExpense({id: expenseOne.expense.id }))
store.dispatch(editExpense(ExpenseTwo.expense.id, {amount: 500}));
 */
//FILTER

// store.dispatch(setTextFilter('rent'))
//store.dispatch(setTextFilter())
store.dispatch(sortByAmount())
//store.dispatch(sortByDate())

 //store.dispatch(setStartDate(2000))
//store.dispatch(setStartDate())
//store.dispatch(setEndDate(1250))
//store.dispatch(setEndDate()) 

const demoState = {
  expenses: [{
    id:'isuhdsçldj',
    description: 'January rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text:'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
};