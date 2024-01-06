// Updated ExpensesCalcApp.jsx

import React, { useEffect, useState } from "react";
import "./ExpensesCalcApp.css";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { IoAdd } from "react-icons/io5";

export default function ExpensesCalcApp() {
  const [formData, setFormData] = useState({
    date: "",
    expense: "",
    amount: "",
  });
  // const [budget, setBudget] = useState(0);

  const [expenses, setExpenses] = useState(() => {
    const storedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    console.log("Retrieved from local storage:", storedExpenses);
    return storedExpenses;
  });
  const [budget, setBudget] = useState(() => {
    const storedBudget = JSON.parse(localStorage.getItem("budget")) || 0;
    console.log("Retrieved from local storage:", storedBudget);
    return storedBudget;
  });
  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    console.log("Retrieved from local storage:", storedExpenses);
    setExpenses(storedExpenses);
  }, []);

  // ...

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
    console.log("Saved to local storage:", expenses);
  }, [expenses]);

  useEffect(() => {
    localStorage.setItem("budget", budget.toString());
    console.log("Saved budget to local storage:", budget);
  }, [budget]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "expense" && !/^[a-zA-Z\s]+$/.test(value)) {
      return;
    }

    if (name === "amount" && !/^\d*\.?\d*$/.test(value)) {
      return;
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      id: new Date().getTime(),
      date: formData.date,
      expense: formData.expense,
      amount: parseFloat(formData.amount),
    };
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
    setFormData({
      date: "",
      expense: "",
      amount: "",
    });
  };
  const handleClearAllExpenses = () => {
    setExpenses([]);
  };
  const handleDelete = (id, amount) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  };

  const handleEdit = (expense) => {
    // Remove the expense to be edited from the expenses array
    const updatedExpenses = expenses.filter((e) => e.id !== expense.id);

    // Set the form data with the values of the expense to be edited
    setFormData({
      date: expense.date,
      expense: expense.expense,
      amount: expense.amount.toString(),
    });

    // Set the updated expenses array
    setExpenses(updatedExpenses);
  };

  const remainingCash =
    budget - expenses.reduce((total, expense) => total + expense.amount, 0);
  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <>
      <div className="whole-body">
        <form
          className="my-form card bg-primary text-white"
          onSubmit={handleSubmit}
        >
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <label htmlFor="expense">Expense:</label>
          <input
            type="text"
            id="expense"
            name="expense"
            placeholder="Enter expense"
            value={formData.expense}
            onChange={handleChange}
            required
          />

          <label htmlFor="amount">Amount:</label>
          <input
            type="text"
            id="amount"
            name="amount"
            placeholder="Enter amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />

          <label htmlFor="budget">Budget:</label>
          <input
            type="number"
            id="budget"
            name="budget"
            placeholder="Enter budget"
            value={budget}
            onChange={(e) => setBudget(parseFloat(e.target.value))}
            required
          />

          <button className="button-submit" type="submit">
            <IoAdd />
            Add Expense
          </button>
        </form>
        <div className="expenses-card">
          {expenses.length > 0 && (
            <div>
              <h1>Entered Expenses:</h1>
              {expenses.map((expense) => (
                <p className="expenses-line list" key={expense.id}>
                  &nbsp;
                  <span style={{ color: "purple", fontWeight: "bold" }}>
                    {expense.expense}
                  </span>
                  &nbsp;|&nbsp;
                  <span style={{ color: "green" }}> ${expense.amount}</span>
                  &nbsp;|&nbsp;
                  <span style={{ color: "red" }}>{expense.date}</span>
                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(expense)}
                  >
                    <RiEdit2Fill />
                  </button>
                  <button
                    className="del-btn"
                    onClick={() => handleDelete(expense.id, expense.amount)}
                  >
                    <MdDelete />
                  </button>
                </p>
              ))}{" "}
              <button
                className="button-delete"
                type="submit"
                onClick={handleClearAllExpenses}
              >
                <MdDelete />
                Clear All Expenses
              </button>
            </div>
          )}
        </div>{" "}
        <hr></hr>
        <div className="other-card">
          <h3>Total Budget for the Month:</h3>
          <p>${budget}</p>

          <div>
            <h3>Total Expenses:</h3>
            <p>${totalExpenses}</p>
          </div>

          <div>
            <h3>Remaining Cash:</h3>
            <p>${remainingCash}</p>
          </div>
        </div>
      </div>
    </>
  );
}
