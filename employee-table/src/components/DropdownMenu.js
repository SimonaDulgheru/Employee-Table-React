import React from "react";

function DropdownMenu({ orderEmployee }) {
	return (
		<div className="dropdown">
			<button
				className="btn dropdown-toggle border-info"
				type="button"
				id="dropdownMenuButton"
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false">
				Order By
			</button>
			<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
				<button
					className="dropdown-item"
					onClick={() => orderEmployee("id")}>
					Id
				</button>
				<button
					className="dropdown-item"
					onClick={() => orderEmployee("firstName")}>
					First Name
				</button>
				<button
					className="dropdown-item"
					onClick={() => orderEmployee("lastName")}>
					Last Name
				</button>
				<button
					className="dropdown-item"
					onClick={() => orderEmployee("department")}>
					Department
				</button>
				<button
					className="dropdown-item"
					onClick={() => orderEmployee("position")}>
					Position
				</button>
				<button
					className="dropdown-item"
					onClick={() => orderEmployee("email")}>
					Email
				</button>
			</div>
		</div>
	);
}

export default DropdownMenu;
