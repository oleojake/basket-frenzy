import { Box, Button, Container, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export const HomePage: React.FC = () => {
	return (
		<Container maxWidth="sm" sx={{ textAlign: "center", p: 4 }}>
			<Typography variant="h4" component="h1">
				Basket Frenzy
			</Typography>
			<Typography variant="body1" component="p">
				Explora una selección de diferentes minijuegos relacionados con el
				baloncesto.
			</Typography>
			<Box sx={{ display: "flex", flexDirection: "column", alignItems:"center"}}>
				<Button
					variant="contained"
					color="info"
					component={NavLink}
					to={"/indicius"}
					sx={{ fontSize: "1em", my: 2, width: "300px" }}
				>
					Indicius
				</Button>
				<Button
					variant="contained"
					color="info"
					component={NavLink}
					to={"/indicius"}
					sx={{ fontSize: "1em", my: 2, width: "300px" }}
				>
					Quitamanchas
				</Button>
			</Box>
		</Container>
	);
};
