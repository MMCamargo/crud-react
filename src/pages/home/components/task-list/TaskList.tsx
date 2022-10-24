import TaskListStyle from './TaskListStyle'
import TaskListHeader from '../task-list-header/TaskListHeader'
import TaskListBody from '../task-list-body/TaskListBody'

function TaskList(): JSX.Element {
	return (
		<TaskListStyle>
			<TaskListHeader />
			<TaskListBody />
		</TaskListStyle>
	)
}

export default TaskList
