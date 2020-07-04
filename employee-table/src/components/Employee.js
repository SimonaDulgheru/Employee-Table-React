import React from "react";

function Employee({ id, FirstName, LastName, department, position, email }) {
	return (
		<tr>
			<th scope="row">{id}</th>
			<td>{FirstName}</td>
			<td>{LastName}</td>
			<td>{department}</td>
			<td>{position}</td>
			<td>{email}</td>
		</tr>
	);
}

//Export Employee Component

export default Employee;
