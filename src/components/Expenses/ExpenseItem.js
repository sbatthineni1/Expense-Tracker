import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const clickHandler = () => {
    props.onDelete(props.id); // Pass the id of the expense to be deleted
    console.log(props.id);
  };
  
  //this is stateless or dumb or presenattion 
  /* const [title, setTitle] = useState();
  function clickHandler() {
    setTitle("updated!");
    console.log(title);
  }*/ 

  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button className="expense-item__price" onClick={clickHandler}> Delete</button>
       
      </div>
      {/* <button onClick={clickHandler}> Change Title</button> */}
    </Card>
    </li>
  );
};

export default ExpenseItem;
