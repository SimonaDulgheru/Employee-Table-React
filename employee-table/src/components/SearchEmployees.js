import React from "react";

function SearchEmployees({ handleInput }) {
	return (
		<div className="search-input">
			<i class="fas fa-search icon"></i>
			<input
				className="input-field"
				name="search"
				type="text"
				placeholder="Search Employee..."
				onChange={handleInput}
			/>
		</div>
	);
}

export default SearchEmployees;
