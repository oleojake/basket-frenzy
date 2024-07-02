import { Button } from "@mui/material";

interface ClueButtonProps {
	clues: number;
	setClues: (value: number) => void;
	gameOver: boolean;
}

export const ClueButton: React.FC<ClueButtonProps> = (props) =>{
	const { clues, setClues, gameOver } = props;
	
	const newClue = () => {
		setClues(clues - 1);
	};

	return (
		<Button
				variant="outlined"
				color="info"
				onClick={newClue}
				disabled={clues > 0 && !gameOver ? false : true}
			>
				{clues > 0 && !gameOver ? `Quiero una pista ${clues}/5` : "No puedes pedir más pistas"}
			</Button>
	)
}