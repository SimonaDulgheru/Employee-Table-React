import React from "react";
import Employee from "../components/Employee";

function Table({ employees }) {
	return (
		<table className="#">
			<thead>
				<tr>
					<th scope="col">Id</th>
					<th scope="col">First Name</th>
					<th scope="col">Last Name</th>
					<th scope="col">Department</th>
					<th scope="col">Position</th>
					<th scope="col">Email</th>
				</tr>
			</thead>
			<tbody>
				{employees.map((employee) => (
					<Employee
						id={employee.id}
						key={employee.id}
						firstName={employee.firstName}
						lastName={employee.lastName}
						department={employee.department}
						position={employee.position}
						email={employee.email}
					/>
				))}
			</tbody>
		</table>
	);
}

export default Table;
