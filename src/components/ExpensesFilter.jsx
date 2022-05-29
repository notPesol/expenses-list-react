const ExpensesFilter = (props) => {

	const onChangeHandler = (event) => {
		props.onYearChange(+event.target.value);
	}

	return (
		<div className="expenses-filter" style={{backgroundColor: "rgb(111 114 141)", display: "flex", gap: "5px", padding: "5px"}}>
			<label htmlFor="select">Filter by year: </label>
			<select onChange={onChangeHandler} id="select" value={props.year}>
				<option value="0">All</option>
				<option value="2022">2022</option>
				<option value="2023">2023</option>
				<option value="2024">2024</option>
				<option value="2025">2025</option>
				<option value="2026">2026</option>

			</select>
		</div>
		)
}

export default ExpensesFilter;