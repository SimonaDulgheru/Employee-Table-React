import React from "react";
import DropdownMenu from "../components/DropdownMenu";
import SearchEmployees from "../components/SearchEmployees";

function SearchMenu({ employees, orderEmployee, filterEmployee, handleInput }) {
	return (
		<div className="search-menu">
			<div className="dropdown">
				<DropdownMenu
					employees={employees}
					orderEmployee={orderEmployee}
				/>
			</div>
			<div className="search-input">
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
