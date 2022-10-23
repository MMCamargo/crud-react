import FormButtonStyle from './FormButtonStyle'

interface FormButtonProps {
	children: string
}

function FormButton(props: FormButtonProps): JSX.Element {
	return <FormButtonStyle>{props.children}</FormButtonStyle>
}

export default FormButton
