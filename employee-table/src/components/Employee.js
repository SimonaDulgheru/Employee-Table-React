import React from "react";

function Employee({ id, firstName, lastName, department, position, email }) {
	return (
		<tr>
			<th scope="row">{id}</th>
			<td>{firstName}</td>
			<td>{lastName}</td>
			<td>{department}</td>
			<td>{position}</td>
			<td>{email}</td>
		</tr>
	);
}
console.log(Employee);
//Export Employee Component

export default Employee;
