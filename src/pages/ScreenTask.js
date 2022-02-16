import React from 'react'
import Table from '../components/Table'

import '../styles/ScreenTask.css';

export default function ScreenTask() {
  return (
    <div className='container-geral'>
      <main>
				<div>
					<h2 data_test_id = 'title'>TaskDo</h2>
				</div>
        <label htmlFor='input-task'>
          Tarefa
          <input type="text" id='input-task'/>
        </label>
        <button>Adicionar</button>
        <Table />
			</main>
    </div>
  )
}
