import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
  const dataPointsValues = props.items.map((expense) => expense.amount);
  //console.log(dataPointsValues);
  const totalSum = dataPointsValues.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  if (props.items.length === 0) {
    return (
      <div className="expenses-list__fallback">
        <h4>No Expenses Found</h4>
      </div>
    );
  }
  return (
    <div>
      <ul className="expenses-list">
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            id={expense.id} // Pass the id of the expense
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            onDelete={props.onDeleteExpense} // Pass the onDelete function
          />
        ))}
      </ul>
      <div>
        {" "}
        <div className="expenses-list__fallback">
          <h4>Expenses Total : ${totalSum.toFixed(2)}</h4>
        </div>
      </div>
    </div>
  );
}

export default ExpensesList;
