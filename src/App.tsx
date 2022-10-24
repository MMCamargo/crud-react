import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyle from './config/GlobalStyle'
import AppRoutes from './routes/AppRoutes'

function App(): JSX.Element {
	return (
		<>
			<CssBaseline />
			<GlobalStyle />
			<AppRoutes />
		</>
	)
}

export default App
