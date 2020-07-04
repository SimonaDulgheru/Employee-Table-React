import React from "react";
import DropdownMenu from "../components/DropdownMenu";
import SearchEmployees from "../components/SearchEmployees";

function SearchMenu({ employees, orderEmployee, filterEmployee, handleInput }) {
	return (
		<div className="#">
			<div className="#">
				<DropdownMenu
					employees={employees}
					orderEmployee={orderEmployee}
				/>
			</div>
			<div className="#">
				<SearchEmployees
					employees={employees}
					filterEmployee={filterEmployee}
					handleInput={handleInput}
				/>
			</div>
		</div>
	);
}

export default SearchMenu;
