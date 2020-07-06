import React, { useState, useEffect } from "react";
import DataApi from "../DataApi/DataApi.json";
import Table from "../components/Table";
import SearchMenu from "../components/SearchMenu";

function Container() {
	const [employees, setEmployees] = useState(DataApi);
	const [search, setSearch] = useState("");

	useEffect(() => {
		filterEmployee(search);
	}, [search]);

	const orderEmployee = (orderBy) => {
		const sortedEmployees = employees.sort((a, b) =>
			a[orderBy] > b[orderBy] ? 1 : -1
		);
		setEmployees([...sortedEmployees]);
	};

	//Filter Table

	const filterEmployee = (search) => {
		const toLower = search.toLowerCase().trim();

		const filteredEmployees = employees.filter((employee) => {
			const values = Object.values(employee);

			//Loop through values
			for (let value of values) {
				const valueToString = value.toString().toLowerCase();
				if (valueToString.includes(toLower)) {
					return employee;
				}
			}
		});
		setEmployees(filteredEmployees);
	};

	const handleInput = (e) => {
		setEmployees(DataApi);
		setSearch(e.target.value);
	};

	return (
		<div className="container">
			<SearchMenu
				employees={employees}
				orderEmployee={orderEmployee}
				filterEmployee={filterEmployee}
				handleInput={handleInput}
			/>
			<Table employees={employees} />
		</div>
	);
}

export default Container;
