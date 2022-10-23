import TitleStyle from './TitleStyle'

interface TitleProps {
	children: string
}

function Title(props: TitleProps): JSX.Element {
	return <TitleStyle>{props.children}</TitleStyle>
}

export default Title
