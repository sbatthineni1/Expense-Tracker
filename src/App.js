import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

const dummyExpense = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2022, 2, 16),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expense, setExpenses] = useState(dummyExpense);
  function addExpenseHandler(newExpenses) {
    setExpenses((prevExpenses) => {
      return [newExpenses, ...prevExpenses];
    });
  }
  console.log(expense);
  // const deleteExpenseHandler = (expenseId) => {
  //   setExpenses(prevExpenses => {
  //     const updatedExpenses = prevExpenses.filter((expense) => expense.id !== expenseId);
  //     console.log(updatedExpenses);
  //     return updatedExpenses;
  //   })
  // }
  //   // Filter out the expense with the given ID
    
    
  
  
  // this is under the hood react code that converts below JSX code to load the webpage
  /* return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "Let's get started!"),
    React.createElement(Expenses, { expense: expense })
  ); */

  // below is the JSX code esy for understanding
  return (
    <div>
      <NewExpense onNewExpenseAdded={addExpenseHandler} />
      <Expenses expense={expense} />
    </div>
  );
};

export default App;

