import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsShowing(false);
  };

  const [isShowing, setIsShowing] = useState(false);
  const showExpenseForm = () => {
    setIsShowing(true);
  };

  const hideExpenseForm = () => {
    setIsShowing(false);
  };

  return (
    <div className="new-expense">
      {isShowing ? (
        <ExpenseForm
          onHideExpenseForm={hideExpenseForm}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      ) : (
        <button onClick={showExpenseForm}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
