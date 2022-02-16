import React, { useState, useEffect } from 'react'
import Table from '../components/Table'


import api from '../services/ connectionAPI';

import '../styles/ScreenTask.css';

export default function ScreenTask() {
  const [task, setTask] = useState('');
  const [ status, setStatus] = useState('');
  
  //https://stackoverflow.com/questions/41481522/how-to-refresh-a-page-using-react-route-link
  function refreshPage(){ 
    window.location.reload(); 
}

  async function handleSubmit(e) {
    e.preventDefault();

    const data = { task, status };
    await api.post('/task', data);
    await refreshPage()

    setTask('');
    setStatus('')  
  }

  return (
    <div className='container-geral'>
      <main>
				<div>
					<h2 data_test_id = 'title'>TaskDo</h2>
				</div>
        <div className='container-label'>
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
          Status
          <input
            type="text"
            id='input-task'
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </label>
        </div>
        <div className='button'>
          <button
            onClick={handleSubmit}
            id='button'
          >
            Adicionar
          </button>
        </div> 
        <Table />
			</main>
    </div>
  )
}
