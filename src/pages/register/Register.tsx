import { Link } from "react-router-dom"
import Container from "../../shared/components/container/Container"
import FormButton from "../../shared/components/form-button/FormButton"
import FormCard from "../../shared/components/form-card/FormCard"
import FormInput from "../../shared/components/form-input/FormInput"
import FormLink from "../../shared/components/form-link/FormLink"

function Register(): JSX.Element {
	return  (
		<Container>
			<FormCard>
				<FormInput />
				<FormInput />
				<FormInput />
				<FormInput />
				<FormButton />
				<p>
					Já possui uma conta?
					<Link to="/">Conecte-se!</Link>
				</p>
			</FormCard>
		</Container>
	)
}

export default Register
