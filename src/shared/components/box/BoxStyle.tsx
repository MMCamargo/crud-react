import styled from 'styled-components'

const BoxStyle = styled.div`
	align-items: center;
	border-radius: 16px;
	box-shadow: 10px 10px 30px rgb(0, 0, 0, 0.2);
	display: grid;
	grid-gap: 32px;
	justify-items: center;
	padding: 32px;
	width: 400px;

	@media (max-width: 425px) {
		border-radius: none;
		box-shadow: none;
		height: 100%;
		width: 100%;
	}
`

export default BoxStyle
