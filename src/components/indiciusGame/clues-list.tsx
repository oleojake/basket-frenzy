import { Divider, Paper, Typography } from "@mui/material"

interface CluesListProps {
	clues: number;
	answerObject: {
		cluesDescriptions: string[];
	};
}

export const CluesList: React.FC<CluesListProps> = (props) => {
	const { clues, answerObject } = props;

	return (
		<>
		{clues <= 4 && (
			<Paper
				sx={{
					mt: 2,
					mb: "8px",
					p: 1,
					display: "flex",
					gap: 2,
					justifyContent: "space-around",
					alignContent: "center",
					alignItems: "center",
				}}
			>
				<Typography variant="h6" component="p">
					1
				</Typography>
				<Divider orientation="vertical" flexItem />
				<Typography variant="body1" component="p" sx={{ flexGrow: 1 }}>
					{answerObject.cluesDescriptions[0]}
				</Typography>
			</Paper>
		)}
		{clues <= 3 && (
			<Paper
				sx={{
					my: "8px",
					p: 1,
					display: "flex",
					gap: 2,
					justifyContent: "space-around",
					alignContent: "center",
					alignItems: "center",
				}}
			>
				<Typography variant="h6" component="p">
					2
				</Typography>
				<Divider orientation="vertical" flexItem />
				<Typography variant="body1" component="p" sx={{ flexGrow: 1 }}>
					{answerObject.cluesDescriptions[1]}
				</Typography>
			</Paper>
		)}
		{clues <= 2 && (
			<Paper
				sx={{
					my: "8px",
					p: 1,
					display: "flex",
					gap: 2,
					justifyContent: "space-around",
					alignContent: "center",
					alignItems: "center",
				}}
			>
				<Typography variant="h6" component="p">
					3
				</Typography>
				<Divider orientation="vertical" flexItem />
				<Typography variant="body1" component="p" sx={{ flexGrow: 1 }}>
					{answerObject.cluesDescriptions[2]}
				</Typography>
			</Paper>
		)}
		{clues <= 1 && (
			<Paper
				sx={{
					my: "8px",
					p: 1,
					display: "flex",
					gap: 2,
					justifyContent: "space-around",
					alignContent: "center",
					alignItems: "center",
				}}
			>
				<Typography variant="h6" component="p">
					4
				</Typography>
				<Divider orientation="vertical" flexItem />
				<Typography variant="body1" component="p" sx={{ flexGrow: 1 }}>
					{answerObject.cluesDescriptions[3]}
				</Typography>
			</Paper>
		)}
		{clues === 0 && (
			<Paper
				sx={{
					my: "8px",
					p: 1,
					display: "flex",
					gap: 2,
					justifyContent: "space-around",
					alignContent: "center",
					alignItems: "center",
				}}
			>
				<Typography variant="h6" component="p">
					5
				</Typography>
				<Divider orientation="vertical" flexItem />
				<Typography variant="body1" component="p" sx={{ flexGrow: 1 }}>
					{answerObject.cluesDescriptions[4]}
				</Typography>
			</Paper>
		)}
		</>
	)
}