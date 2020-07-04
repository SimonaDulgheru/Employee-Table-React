import React from "react";

function DropdownMenu({ orderEmployee }) {
	return (
		<div className="#">
			<button
				className="btn"
				type="button"
				id="dropdownMenuButton"
				data-toggle="dropdownMenu"
				aria-haspopup="true"
				aria-expanded="false">
				Order By
			</button>
			<div className="btn" aria-labelledby="dropdownMenuButton">
				<button
					className="menu-list"
					onClick={() => orderEmployee("id")}>
					Id
				</button>
				<button
					className="btn"
					onClick={() => orderEmployee("FirstName")}>
					First Name
				</button>
				<button
					className="btn"
					onClick={() => orderEmployee("LastName")}>
					Last Name
				</button>
				<button
					className="btn"
					onClick={() => orderEmployee("department")}>
					Department
				</button>
				<button
					className="btn"
					onClick={() => orderEmployee("position")}>
					Position
				</button>
				<button className="btn" onClick={() => orderEmployee("email")}>
					Email
				</button>
			</div>
		</div>
	);
}

export default DropdownMenu;
