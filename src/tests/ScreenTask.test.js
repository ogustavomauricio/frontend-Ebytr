import { render, screen } from '@testing-library/react';
import ScreenTask from '../pages/ScreenTask';

describe('Verifica se existe todos itens necessários na tela de Tarefas', () => {
	it('Existe um Titulo na pagina', () => {
    render(<ScreenTask />);

		const title = screen.getByText(/taskdo/i);

		expect(title).toBeInTheDocument(); 
  });
  it('Existe um Botão na pagina', () => {
    render(<ScreenTask />);

		const button = screen.getByRole('button');

		expect(button).toBeInTheDocument(); 
  });

	it('Existe um input na pagina', () => {
    render(<ScreenTask />);

		const task = screen.getByLabelText('Tarefa:');

		expect(task).toBeInTheDocument();
		expect(task).toHaveProperty('type', 'text');
  });
})