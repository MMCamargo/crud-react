import FormStyle from './FormStyle'

interface FormProps {
	children: JSX.Element | JSX.Element[]
	onSubmit: any
}

function Form(props: FormProps): JSX.Element {
	return <FormStyle>{props.children}</FormStyle>
}

export default Form
