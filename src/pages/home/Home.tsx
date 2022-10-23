import Container from '../../shared/components/container/Container'
import Header from './components/header/Header'
import Table from './components/table/Table'
import Task from './components/task/Task'

function Home(): JSX.Element {
	return (
		<Container>
				<Header></Header>
			<Table>
				<Task></Task>
			</Table>
		</Container>
	)
}

export default Home
