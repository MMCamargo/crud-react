import BoxStyle from './BoxStyle'

interface BoxProps {
	children: JSX.Element | JSX.Element[]
}

function Box(props: BoxProps): JSX.Element {
	return <BoxStyle>{props.children}</BoxStyle>
}

export default Box
