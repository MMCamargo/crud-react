import TaskStyle from './TaskStyle'

interface TaskProps {
	title: string;
    description: string;
    status: boolean;
}

function Task(props: TaskProps): JSX.Element {
	return (
		<TaskStyle>
         <td></td>
         <td></td>
         <td></td>
         <td>
            <button>Editar</button>
            <button>Excluir</button>
         </td>        
        </TaskStyle>
	)
}

export default Task