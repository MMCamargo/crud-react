import HomeContainer from './components/home-container/HomeContainer'
import Header from './components/header/Header'
import Welcome from './components/welcome/Welcome'
import TaskList from './components/task-list/TaskList'

function Home(): JSX.Element {
	return (
		<HomeContainer>
			<Header />
			<Welcome />
			<TaskList />
		</HomeContainer>
	)
}

export default Home
