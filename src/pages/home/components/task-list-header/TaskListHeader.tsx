import TaskListRows from '../task-list-rows/TaskListRows'
import TaskListCells from '../task-list-cells/TaskListCells'
import { Button, TextField } from '@mui/material'

function TaskListHeader(): JSX.Element {
	return (
		<TaskListRows>
			<TaskListCells>
				<p className='task-list-head'>Status</p>
			</TaskListCells>
			<TaskListCells>
				<TextField
					id='standard-basic'
					label='Tarefa'
					variant='standard'
					fullWidth={true}
				/>
			</TaskListCells>
			<TaskListCells>
				<TextField
					id='standard-basic'
					label='Descrição'
					variant='standard'
					fullWidth={true}
				/>
			</TaskListCells>
			<TaskListCells>
				<div className='task-list-actions'>
					<Button variant='outlined' fullWidth={true}>
						Cancelar
					</Button>
					<Button variant='contained' fullWidth={true}>
						Salvar
					</Button>
				</div>
			</TaskListCells>
		</TaskListRows>
	)
}

export default TaskListHeader
