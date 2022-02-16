import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

import api from '../services/ connectionAPI';

export default function EditTable() {
	const [task, setTask] = useState('');
  const [ status, setStatus] = useState('');

	const { id } = useParams();

	useEffect(() => {
    async function getTask() {
      const result = await api.get(`/task/${id}`);
      // console.log('RESULT',result);
      setTask(result.data.task);
      setStatus(result.data.status);
     
    }
    getTask();
  }, [id]);


	async function handleSubmit() {
    const data = { task, status };
    // console.log(data);
    const response = await api.put(`/task/${id}`, data);
    // console.log('RESPONSE',response);
    if (response.status === 200) {
      window.location.href = "/";
    } else {
      alert("Erro ao atualizar o Cliente");
    }
  }

  return (
    <div className='container-geral'>
      <main>
				<div>
					<h2 data_test_id = 'title'>Editar sua Tarefa</h2>
				</div>
        <label htmlFor='input-task'>
          Tarefa
          <input
            type="text"
            id='input-task'
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </label>
        <label htmlFor='input-task'>
          status
          <input
            type="text"
            id='input-task'
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </label>
        <button
        onClick={handleSubmit}
        >
					Editar
				</button>

				<button
          href='/'
        >
					Voltar
				</button>      
			</main>
    </div>
  )
}
