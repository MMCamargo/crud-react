import { AppBar, Toolbar, Typography } from '@mui/material'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded'
import { Link as RouterLink } from 'react-router-dom'

function Header(): JSX.Element {
	return (
		<AppBar position='fixed'>
			<Toolbar>
				<Typography variant='h4'>TaskList</Typography>
				<RouterLink
					to={'/'}
					style={{
						color: 'inherit',
						position: 'absolute',
						right: '16px',
						marginTop: '4px'
					}}
				>
					<LogoutRoundedIcon
						sx={{
							fontSize: '32px'
						}}
					/>
				</RouterLink>
			</Toolbar>
		</AppBar>
	)
}

export default Header
