import { Box, Chip, Typography } from "@mui/material";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";

interface ScoreBoxProps {
	score1: number;
	score2: number;
	turn: number;
	mode: string;
}

export const ScoreBox: React.FC<ScoreBoxProps> = (props) => {
	const { score1, score2, turn, mode } = props;
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
						label={score2 + " points"}
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
	return (
		generateScoreBox()
	);
};
