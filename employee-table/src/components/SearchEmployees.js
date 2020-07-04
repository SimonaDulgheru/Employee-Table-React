import React from "react";

function SearchEmployees({ handleInput }) {
	return (
		<div>
			<input
				name="search"
				type="text"
				placeholder="Search Employee ..."
				onChange={handleInput}
			/>
		</div>
	);
}

export default SearchEmployees;
