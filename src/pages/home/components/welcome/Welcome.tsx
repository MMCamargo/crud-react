import { Typography } from '@mui/material'

function Welcome(): JSX.Element {
	return (
		<Typography variant='h4' sx={{ mt: '128px' }}>
			Bem-vindo, <span>Usuário</span>
		</Typography>
	)
}

export default Welcome
