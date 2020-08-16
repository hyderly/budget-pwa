const initialState = {
  income: [],
  expense: [],
};

const BudegtReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addIncome":
      return {
        ...state,
        income: [...state.income, action.payload],
      };
    case "addExpense":
      return {
        ...state,
        expense: [...state.expense, action.payload],
      };
    default:
      return state;
  }
};

export default BudegtReducer;
