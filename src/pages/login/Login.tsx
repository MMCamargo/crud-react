import Container from '../../shared/components/container/Container'
import Box from '../../shared/components/box/Box'
import { Typography, TextField, Button, Link as LinkText } from '@mui/material'
import Form from '../../shared/components/form/Form'
import { Link as RouterLink } from 'react-router-dom'

function Login(): JSX.Element {
	const onSubmit = (e: any) => {
		e.preventDefault()
		console.log('funcionou')
		const data = {}
	}

	return (
		<Container>
			<Box>
				<Typography variant='h3'>Login</Typography>
				<Form onSubmit={onSubmit}>
					<TextField
						id='standard-basic'
						label='E-mail'
						variant='standard'
						fullWidth={true}
					/>
					<TextField
						id='standard-basic'
						label='Senha'
						variant='standard'
						fullWidth={true}
					/>
					<RouterLink
						to='/Home'
						style={{ textDecoration: 'none', width: '100%' }}
					>
						<Button
							type='submit'
							variant='outlined'
							fullWidth={true}
							sx={{ mt: '16px' }}
						>
							Entrar
						</Button>
					</RouterLink>
				</Form>
				<p>
					Não possui uma conta?
					<RouterLink
						to='/Register'
						style={{ textDecoration: 'none' }}
					>
						<LinkText underline='none'> Cadastre-se!</LinkText>
					</RouterLink>
				</p>
			</Box>
		</Container>
	)
}

export default Login
