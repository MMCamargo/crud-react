import Container from '../../shared/components/container/Container'
import FormButtonStyle from '../../shared/components/form-button/FormButtonStyle'
import FormCard from '../../shared/components/form-card/FormCard'
import FormInput from '../../shared/form-input/FormInput'

function Login(): JSX.Element {
	return (
		<Container>
			<FormCard>
				<FormInput />
				<FormInput />
				<FormButtonStyle />
			</FormCard>
		</Container>
	)
	
}

export default Login
