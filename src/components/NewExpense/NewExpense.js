import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
    const [isEditing, setIsEditing] = useState(false);
    function isEditingHandler() {
        setIsEditing(true);
    }
    function stopEditingHandler(){
        setIsEditing(false);
    }

    function saveExpenseDatahandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onNewExpenseAdded(expenseData);
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
            {!isEditing && (
                <button onClick={isEditingHandler}> Add New Expense</button>
            )}
            {isEditing && <ExpenseForm onFormSubmission={saveExpenseDatahandler} onCancel = {stopEditingHandler}/>}
        </div>
    );
}

export default NewExpense;
