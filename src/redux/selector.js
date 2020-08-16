import createSelector from "reselect";

const selectBudget = (state) => state.budget;

export const selectIncome = createSelector(
  [selectBudget],
  (budget) => budget.income
);

export const selectExpense = createSelector(
  [selectBudget],
  (budget) => budget.expense
);
