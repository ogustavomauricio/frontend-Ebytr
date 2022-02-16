import React from 'react'

export default function Table() {
  return (
    <table>
			<thead>
			  <tr>
				  <th>Task</th>
				  <th>Criado em:</th>
				  <th>Status</th>
				  <th>Ação</th>
			  </tr>
			</thead>

			<tbody>
				<td>Projeto</td>
				<td>16/02/2022</td>
				<td>Terminando</td>
				<td>EDITAR/EXCLUIR</td>
			</tbody>
		</table>
  )
}
