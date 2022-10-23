import ContainerStyle from './ContainerStyle'

interface ContainerProps {
	children: JSX.Element | JSX.Element[]
}

function Container(props: ContainerProps): JSX.Element {
	return <ContainerStyle>{props.children}</ContainerStyle>
}

export default Container
