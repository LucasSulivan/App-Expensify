import moment from "moment";

const filterReducerDefault = {
  text: '',
  sortBy:'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};

//FILTER

export default(state =filterReducerDefault,action )=>{
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
