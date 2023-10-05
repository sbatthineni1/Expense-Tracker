import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [selectedFilter, setSelectedFilter] = useState("2020");
  const [expenses, setExpenses] = useState(props.expense); // Store expenses in state

  // let infoSelectionOption = '2019, 2021 & 2022';
  // if (selectedFilter === '2019')
  //   infoSelectionOption = '2020, 2021 & 2022';
  // else if (selectedFilter === '2021')
  //   infoSelectionOption = '2019, 2020 & 2022';
  // else if (selectedFilter === '2022')
  //   infoSelectionOption = '2019, 2020 & 2021';

  const filterOptionHandler = (selectedOption) => {
    setSelectedFilter(selectedOption);
  };
  const deleteExpenseHandler = (expenseId) => {
    // Filter out the expense with the given ID
    const updatedExpenses = expenses.filter((expense) => expense.id !== expenseId);
    setExpenses(updatedExpenses);
    
    console.log(updatedExpenses);
  }
  const filteredExpenses = props.expense.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedFilter;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selectedYear={selectedFilter}
          onFilterOptionSelected={filterOptionHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList
          items={filteredExpenses} onDeleteExpense={deleteExpenseHandler}/>
        {/* <p> Data for years {infoSelectionOption} is hidden</p> */}

        {/* <ExpenseItem
          title={props.expense[0].title}
          amount={props.expense[0].amount}
          date={props.expense[0].date}
        />
        <ExpenseItem
          title={props.expense[0].title}
          amount={props.expense[0].amount}
          date={props.expense[0].date}
        />
        <ExpenseItem
          title={props.expense[0].title}
          amount={props.expense[0].amount}
          date={props.expense[0].date}
        />
        <ExpenseItem
          title={props.expense[0].title}
          amount={props.expense[0].amount}
          date={props.expense[0].date}
        /> */}
      </Card>
    </div>
  );
};

export default Expenses;
