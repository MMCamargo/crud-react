import TableStyle from './TableStyle'

interface TableProps {
	children: JSX.Element | JSX.Element[]
}

function Table(props: TableProps): JSX.Element {
	return (
		<TableStyle>{props.children}</TableStyle>
	)
}

export default Table