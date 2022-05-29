import "./ExpenseForm.css";

import { useState } from "react";

const INITIAL_EXPENSE = {
	title: "",
		amount: "",
		date: ""
	};

const ExpenseForm = (props) => {

	const [isOnAdd, setIsOnAdd] = useState(false);
	const [expenseData, setExpenseDate] = useState(INITIAL_EXPENSE);

	const openOnAdd = () => {
		setIsOnAdd(true);
	}

	const closeOnAdd = () => {
		setIsOnAdd(false);
	}

	const onChangeHandler = (event) => {
		const {id, value} = event.target;
		setExpenseDate(prevExpenseDate => (
		{
			...prevExpenseDate,
			[id]: value
		}));
	}

	const addExpenseHandler = (event) => {
		event.preventDefault();
		const expense = {
			id: 'e' + Math.round(Math.random() * 9999),
			title: expenseData.title.trim(),
			amount: +expenseData.amount,
			date: new Date(expenseData.date)
		};
		props.onAddExpense(expense);
		setExpenseDate(INITIAL_EXPENSE);
	}

	if (!isOnAdd) {
		return (
			<div className="expense-form">
				<div className="expense-form__control" style={{width: "100%", textAlign: "center"}}>
					<button style={{backgroundColor: "green", margin: "0"}} onClick={openOnAdd}>Add New Expense</button>
				</div>
			</div>
			);
	}

	return (
		<form className="expense-form">
			<div className="expense-form__control">
				<label style={{display: "block"}} htmlFor="title">Title</label>
				<input onChange={onChangeHandler} value={expenseData.title} type="text" id="title" />
			</div>
			<div className="expense-form__control">
				<label style={{display: "block"}} htmlFor="amount">Amount</label>
				<input min="0.1" step="0.1" onChange={onChangeHandler} value={expenseData.amount} type="number" id="amount" />
			</div>
			<div className="expense-form__control">
				<label style={{display: "block"}} htmlFor="date">Date</label>
				<input min="2022-01-01" max="2030-12-31" onChange={onChangeHandler} value={expenseData.date} type="date" id="date" />
			</div>
			<div className="expense-form__control">
				<button onClick={closeOnAdd} type="button">Cancel</button>
				<button onClick={addExpenseHandler} type="submit">Add Expense</button>
			</div>
		</form>
		)
};

export default ExpenseForm;