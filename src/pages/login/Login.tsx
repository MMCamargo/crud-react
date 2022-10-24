import Container from '../../shared/components/container/Container'
import Box from '../../shared/components/box/Box'
import { Typography, TextField, Button, Link as LinkText } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

function Login(): JSX.Element {
	return (
		<Container>
			<Box>
				<Typography variant='h3'>Login</Typography>
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
						variant='outlined'
						fullWidth={true}
						sx={{ mt: '16px' }}
					>
						Entrar
					</Button>
				</RouterLink>
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
