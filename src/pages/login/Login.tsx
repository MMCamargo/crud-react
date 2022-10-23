import Container from '../../shared/components/container/Container'
import FormButton from '../../shared/components/form-button/FormButton'
import FormCard from '../../shared/components/form-card/FormCard'
import FormInput from '../../shared/components/form-input/FormInput'
import FormLink from '../../shared/components/form-link/FormLink'

function Login(): JSX.Element {
	return (
		<Container>
			<FormCard>
				<FormInput />
				<FormInput />
				<FormButton />
				<p>
					Não possui uma conta?
					<FormLink>Cadastre-se!</FormLink>
				</p>
			</FormCard>
		</Container>
	)
}

export default Login
