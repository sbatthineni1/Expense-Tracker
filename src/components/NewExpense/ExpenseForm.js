import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [isValidTitle, setIsValidTitle] = useState(true);
  const [isValidAmount, setIsValidAmount] = useState(true);
  const [isValidDate, setIsValidDate] = useState(true);

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  /*function inputChangeHandler(identifier, value) {
          if (identifier === "title") setEnteredTitle = value;
          else if (identifier === "date") setEnteredDate = value;
          else setEnteredAmount = value;
        }
      */
  function titleChangeHandler(event) {
    if (event.target.value.trim().length > 0) {
      setIsValidTitle(true);
    }
    setEnteredTitle(event.target.value);
    /*  setUserInput((prevState) => {
                return(
                {...prevState,
                setUserInput: event.target.value}
                );
            } ) */
  }
  function amountChangeHandler(event) {
    if (event.target.value.trim().length > 0) {
      setIsValidAmount(true);
    }
    setEnteredAmount(event.target.value);
  }
  function dateChangeHandler(event) {
    const enteredDateString = event.target.value;
    const enteredDate = new Date(enteredDateString);
    if (!isNaN(enteredDate.getTime())) {
      setIsValidDate(true);
    }
    setEnteredDate(event.target.value);
  }

  function submitHandler(event) {
    const inputDate = new Date(enteredDate);
    event.preventDefault();
    if (enteredTitle.trim().length === 0) {
      setIsValidTitle(false);
      return;
    }
    else if (enteredAmount.trim().length === 0) {
      setIsValidAmount(false);
      return;
    }
  
    else if (isNaN(inputDate)) {
      setIsValidDate(false);
      return;

    }
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);

    props.onFormSubmission(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* <input type="text" onChange={(event) => {inputChangeHandler('title', event.target.value)}} /> */}
          <input
            style={{
              background: !isValidTitle ? "pink" : "white",
              borderColor: !isValidTitle ? "red" : "#ccc",
            }}
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            style={{
              background: !isValidAmount ? "pink" : "white",
              borderColor: !isValidAmount ? "red" : "#ccc",
            }}
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            style={{
              background: !isValidDate ? "pink" : "white",
              borderColor: !isValidDate ? "red" : "#ccc",
            }}
            type="date"
            min="2019-01-01"
            max="2023-12-12"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
        </div>
        <div> </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
