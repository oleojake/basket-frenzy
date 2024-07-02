import { Divider, IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProps {
	answer: string;
	setAnswer: (value: string) => void;
	answerRef: React.MutableRefObject<HTMLInputElement | null>;
	handleAnswer: (e: React.FormEvent) => void;
	pointsIfWin: number;
}

export const SearchBar: React.FC<SearchBarProps> = (props) => {
	const { answer, setAnswer, answerRef, handleAnswer, pointsIfWin } = props;

	return (
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
	);
}