import {
	Divider,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";

interface NavListProps {
	onClick: () => void;
	navLinks: { title: string; path: string }[];
}

export const NavListDrawer: React.FC<NavListProps> = (props) => {
	const { onClick, navLinks } = props;
	return (
		<Box
		sx={{ width: 250 }}
		onClick={onClick}
	>
		<nav aria-label="games">
			<List>
				{navLinks.map((item) => (
					<ListItem
						disablePadding
						key={item.title}
					>
						<ListItemButton
							href={item.path}
							component="a"
						>
							{/* <ListItemIcon>{item.icon}</ListItemIcon> */}
							<ListItemText primary={item.title} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</nav>
		<Divider />
	</Box>
	);
};
