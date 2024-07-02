import { Box, Button, Container, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export const IndiciusPage: React.FC = () => {
	return (
		<Container maxWidth="sm" sx={{ textAlign: "center", p: 4 }}>
			<Typography variant="h5" component="h2" textAlign={"left"}>
				Reglas
			</Typography>
			<Typography variant="body1" component="p" textAlign={"left"}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ea ad ipsa voluptate dolorem aspernatur qui atque aut sit consectetur quis eaque rerum, in maiores sed dicta, blanditiis alias sunt.
			</Typography>
			<Box sx={{display:"flex", justifyContent:"space-around"}}>
			<Button
					variant="contained"
					color="info"
					component={NavLink}
					to={"/indicius/game/solo"}
					sx={{ fontSize: "1em", my: 2, width: "100px" }}
				>
					Solo
			</Button>
			<Button
					variant="contained"
					color="info"
					component={NavLink}
					to={"/indicius/game/1v1"}
					sx={{ fontSize: "1em", my: 2, width: "100px" }}
				>
					1 vs 1
			</Button>
			</Box>
		</Container>
	);
};
