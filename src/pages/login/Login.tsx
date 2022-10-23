import { Link } from 'react-router-dom'
import Container from '../../shared/components/container/Container'
import FormButton from '../../shared/components/form-button/FormButton'
import FormCard from '../../shared/components/form-card/FormCard'
import FormInput from '../../shared/components/form-input/FormInput'
import FormTitle from '../../shared/components/title/Title'

function Login(): JSX.Element {
	return (
		<Container>
			<FormCard>
				<FormTitle>Login</FormTitle>
				<FormInput />
				<FormInput />
				<FormButton>Teste</FormButton>
				<p>
					Não possui uma conta?
					<Link to='/Register'>Cadastra-se!</Link>
				</p>
			</FormCard>
		</Container>
	)
}

export default Login
