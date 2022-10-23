import FormLinkStyle from './FormLink'

interface FormLinkProps {
	children: string
}

function FormLink(props: FormLinkProps): JSX.Element {
	return <FormLinkStyle>{props.children}</FormLinkStyle>
}

export default FormLink
