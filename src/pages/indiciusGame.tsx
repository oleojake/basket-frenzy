import {
	Box,
	Button,
	Chip,
	Container,
	Divider,
	IconButton,
	InputBase,
	Paper,
	Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import SearchIcon from "@mui/icons-material/Search";
import * as React from "react";

const answerObject = {
	cluesDescriptions: [
		"Número 3 del draft",
		"Ganador de 6 anillos y 6 MVPs de las finales",
		"He jugado con los dorsales 23, 12 y 45",
		"Fui miembro del Dream Team en los JJOO de 1992",
		"Protagonicé la película Space Jam.",
	],
	answer: "Michael Jordan",
};

export const IndiciusGame: React.FC = () => {
	const { mode } = useParams();
	const [score1, setScore1] = useState(0);
	const [score2, setScore2] = useState(0);
	const [turn, setTurn] = useState(1);
	const [clues, setClues] = useState(5);
	const [pointsIfWin, setPointsIfWin] = useState(clues * 100);
	const [answer, setAnswer] = useState("");
	const [opportunity, setOpportunity] = useState(1);
	const [gameOver, setGameOver] = useState(false);

	const generateScoreBox = () => {
		if (mode === "1v1") {
			return (
				<Box sx={{ display: "flex", justifyContent: "center", gap: 4 }}>
					<Chip
						icon={<LooksOneIcon />}
						color={turn === 1 ? "warning" : "default"}
						label={score1 + " points"}
					/>
					<Chip
						icon={<LooksTwoIcon />}
						color={turn === 2 ? "warning" : "default"}
						label={score1 + " points"}
					/>
				</Box>
			);
		} else {
			return (
				<Box>
					<Typography variant="h6" component="p">
						<Chip icon={<LooksOneIcon />} label={score1 + " points"} />
					</Typography>
				</Box>
			);
		}
	};

	const newClue = () => {
		setClues(clues - 1);
	};

	useEffect(() => {
		setPointsIfWin(clues * 100);
	}, [clues]);

	console.log(gameOver)

	const answerRef = React.useRef<HTMLInputElement>(null);
	const handleAnswer = (e: React.FormEvent) => {
		e.preventDefault();
		const answer = answerRef.current?.value;
		if (answer?.toLowerCase() === answerObject.answer.toLowerCase()) {
			setScore1(score1 + pointsIfWin);
			setGameOver(true);
			alert("¡Correcto! Has ganado " + pointsIfWin + " puntos");
		} else if (opportunity === 1) {
			alert("¡Incorrecto! Te queda 1 oportunidad más");
			setOpportunity(0);
		}	else if (opportunity === 0) {
			alert("¡No te quedan más oportunidades! -100 puntos");
			setScore1(score1 - 100);
			setGameOver(true);
		}
		setAnswer("");
	};

	return (
		<Container
			maxWidth="sm"
			sx={{ display: "flex", flexDirection: "column", p: 4, textAlign: "center" }}
		>
			{generateScoreBox()}
			<br></br>
			{gameOver === false && (
			<Paper
				component="form"
				sx={{ p: "2px 4px", display: "flex", alignItems: "center"}}
			>
				<InputBase
					sx={{ ml: 1, flex: 1 }}
					placeholder={`Por ${pointsIfWin} puntos`}
					inputRef={answerRef}
					value={answer}
					onChange={(e) => setAnswer(e.target.value)}
				/>
				<Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
				<IconButton
					color="primary"
					sx={{ p: "10px" }}
					aria-label="search"
					onClick={handleAnswer}
				>
					<SearchIcon />
				</IconButton>
			</Paper>
			)}
			<br></br>
			<Button
				variant="outlined"
				color="info"
				onClick={newClue}
				disabled={clues > 0 && !gameOver ? false : true}
			>
				{clues > 0 && !gameOver ? `Quiero una pista ${clues}/5` : "No puedes pedir más pistas"}
			</Button>

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
		</Container>
	);
};
