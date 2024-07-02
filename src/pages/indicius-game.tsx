import {
	Container,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as React from "react";
import { ClueButton, ScoreBox, SearchBar} from "../components/indiciusGame";
import { CluesList } from "../components/indiciusGame/clues-list";

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
	const { mode = "solo"} = useParams();
	const [score1, setScore1] = useState(0);
	const [score2, /*setScore2*/] = useState(0);
	const [turn, /*setTurn*/] = useState(1);
	const [clues, setClues] = useState(5);
	const [pointsIfWin, setPointsIfWin] = useState(clues * 100);
	const [answer, setAnswer] = useState("");
	const [opportunity, setOpportunity] = useState(1);
	const [gameOver, setGameOver] = useState(false);

	useEffect(() => {
		setPointsIfWin(clues * 100);
	}, [clues]);

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
			<ScoreBox mode={mode} turn={turn} score1={score1} score2={score2}/>
			<br></br>
			{gameOver === false && (
				<SearchBar answer={answer} setAnswer={setAnswer} answerRef={answerRef} handleAnswer={handleAnswer} pointsIfWin={pointsIfWin}/>
			)}
			<br></br>
			<ClueButton clues={clues} setClues={setClues} gameOver={gameOver}/>

			<CluesList clues={clues} answerObject={answerObject}/>
			
		</Container>
	);
};


