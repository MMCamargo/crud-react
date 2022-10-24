import Container from '../../shared/components/container/Container'
import Box from '../../shared/components/box/Box'
import { Typography, TextField, Button, Link as LinkText } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

function Register(): JSX.Element {
	return (
		<Container>
			<Box>
				<Typography variant='h3'>Cadastro</Typography>
				<TextField
					id='standard-basic'
					label='Nome'
					variant='standard'
					fullWidth={true}
				/>
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
				<TextField
					id='standard-basic'
					label='Repita a senha'
					variant='standard'
					fullWidth={true}
				/>
				<RouterLink
					to='/'
					style={{ textDecoration: 'none', width: '100%' }}
				>
					<Button
						variant='outlined'
						fullWidth={true}
						sx={{ mt: '16px' }}
					>
						Cadastrar
					</Button>
				</RouterLink>
				<p>
					Já possui uma conta?
					<RouterLink to='/' style={{ textDecoration: 'none' }}>
						<LinkText underline='none'> Conecte-se!</LinkText>
					</RouterLink>
				</p>
			</Box>
		</Container>
	)
}

export default Register
