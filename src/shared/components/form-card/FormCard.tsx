import FormCardStyle from './FormCardStyle'

interface FormCardProps {
	children: JSX.Element | JSX.Element[]
}

function FormCard(props: FormCardProps): JSX.Element {
	return <FormCardStyle>{props.children}</FormCardStyle>
}

export default FormCard
