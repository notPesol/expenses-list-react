import "./ExpenseItem.css";

const ExpenseItem = (props) => {

	const expense = props.expense;
	const date = expense.date;

	const month = date.toLocaleDateString("th-TH", {month: "long"});
	const year = date.toLocaleDateString("en-US", {year: "numeric"});
	const day = date.toLocaleDateString("th-TH", {day: "2-digit"});

	const clickHandler = () => {
		props.onDeleteExpense(expense.id);
	}

	return (
		<li>
			<div className="expense-item">
				<div className="expense-item__date">
					<div className="expense-item__month">{month}</div>
					<div className="expense-item__year">{year}</div>
					<div className="expense-item__day">{day}</div>
				</div>
				<div className="expense-item__title">
					{expense.title}
				</div>
				<div className="expense-item__price">
					<p>฿{expense.amount.toFixed(2)}</p>
					<button onClick={clickHandler}>Delete</button>
				</div>
			</div>
		</li>
		)
}

export default ExpenseItem;