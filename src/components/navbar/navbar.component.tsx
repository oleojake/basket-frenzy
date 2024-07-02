import { AppBar, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { NavListDrawer } from "./navbar-list-drawer.component";
import { NavLink, useLocation } from "react-router-dom";

const navLinks = [
	{ title: "Home", path: "/" },
	{ title: "Indicius", path: "/indicius" },
];

export const Navbar: React.FC = () => {
	const location = useLocation();
	const [open, setOpen] = useState(false);
	const [path, setPath] = useState(`/${location.pathname.split("/")[1]}`);

	useEffect(() => {
		setPath(`/${location.pathname.split("/")[1]}`);
	}, [location.pathname]);

	return (
		<>
			<AppBar position="static" color="default">
				<Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
					<Box sx={{ display: "flex", alignItems: "center" }}>
						<IconButton
							color="inherit"
							size="large"
							edge="start"
							aria-label="menu"
							onClick={() => setOpen(true)}
						>
							<MenuIcon />
						</IconButton>
					</Box>
					<Box>
						<Typography variant="h6">
							<b>{navLinks.find((link) => link.path === path && link.path !== "/")?.title}</b>
						</Typography>
					</Box>
					<Box>
						<IconButton
							color="inherit"
							size="large"
							edge="start"
							aria-label="home"
							component={NavLink}
							to={"/"}
						>
							<HomeIcon />
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>

			<Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
				<NavListDrawer onClick={() => setOpen(false)} navLinks={navLinks} />
			</Drawer>
		</>
	);
};
