import React, { useState, useEffect } from 'react'
import api from '../services/ connectionAPI'

import '../styles/Table.css'

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";


import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

export default function TableTask() {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		async function getTasks() {
			const tarefa = await api.get('/task');
			console.log(tarefa.data.task);
			setTasks(tarefa.data.task);
		};

		getTasks();
	}, []);

  async function handleDelete(id) {
    const { _id } = id;
    // console.log(_id);
    if (window.confirm("Deseja excluir este cliente?")) {
      const { status } = await api.delete(`/task/${_id}`);
      if (status === 200) {
        window.location.href = "/";
      } else {
        alert("Ocorreu um erro.Tente Novamente");
      }
    }
  }

  return (
		<TableContainer component={Paper}>
        <div>
          <h2>Tarefas Cadastradas</h2>
        </div>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Tarefa</TableCell>
              <TableCell align="center">Criada em</TableCell>
              <TableCell align="center">Status</TableCell>
              {/* <TableCell align="center">Estado</TableCell> */}
              <TableCell align="center">Ação</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task) => (
              <TableRow key={task._id}>
                <TableCell component="th" scope="task">
                  {task.task}
                </TableCell>
                <TableCell align="center">{task.created_at}</TableCell>
                <TableCell align="center">{task.status}</TableCell>
                {/* <TableCell align="center">{task.state}</TableCell> */}
                <TableCell align="center">
                  <ButtonGroup aria-label="outlined primary button group">
                    <Button
                      color="primary"
                      href={"/editTask/" + task._id}
                    >
                      Editar
                    </Button>
                    <Button
                      color="secondary"
                      onClick={() => handleDelete(task)}
                    >
                      Deletar
                    </Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
	)
}
