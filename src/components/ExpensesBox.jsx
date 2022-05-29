import "./ExpensesBox.css";

import { useState } from "react";

import ExpensesList from "./ExpensesList";
import ExpenseForm from "./ExpenseForm";
import ExpensesFilter from "./ExpensesFilter";

const DUMMY_EXPENSES = [
	{
		id: 'e1',
		title: 'Buy Car',
		amount: 99.75,
		date: new Date('2022-05-25')
	},
	{
		id: 'e2',
		title: 'Buy Toy',
		amount: 12.75,
		date: new Date('2023-01-12')
	},
	{
		id: 'e3',
		title: 'Buy Computer',
		amount: 54.75,
		date: new Date('2023-02-04')
	},
];

const ExpensesBox = (props) => {

	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
	const [filteredYear, setFilteredYear] = useState(0);

	const addExpense = (expense) => {
		setExpenses(prevExpenses => [expense, ...prevExpenses]);
	}

	const deleteExpense = (id) => {
		setExpenses(prevExpenses => prevExpenses.filter(expense => expense.id !== id));
	}

	const changeYearHandler = (year) => {
		setFilteredYear(year);
	}

	let expensesResult = expenses;
	if (filteredYear > 0) {
		expensesResult = expenses.filter(expense => expense.date.getFullYear() === filteredYear);
	}

	return (
		<div className="expenses-box">
			<ExpenseForm onAddExpense={addExpense} />
			<ExpensesFilter year={filteredYear} onYearChange={changeYearHandler} />
			<ExpensesList expenses={expensesResult} onDeleteExpense={deleteExpense} />
		</div>
		);
}

export default ExpensesBox;