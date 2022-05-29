import ExpenseItem from "./ExpenseItem";

import "./ExpensesList.css";

const ExpensesList = (props) => {

	let expenses = props.expenses;

	return (
		<ul className="expenses-list">
			{expenses.map(expense => (
				<ExpenseItem key={expense.id} expense={expense} onDeleteExpense={props.onDeleteExpense} />
				))}
		</ul>
		)
}

export default ExpensesList;