import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

type StatBoxProps = {
  title: string;
  subTitle: string;
  icon: any;
  progress: number;
  increase: string;
};
const StatBox = (props: StatBoxProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0px 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {props.icon}
          <Typography variant="h4" fontWeight="bold" color={colors.grey[400]}>
            {props.title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={props.progress} />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography
          variant="h5"
          fontWeight="bold"
          color={colors.greenAccent[400]}
        >
          {props.subTitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          color={colors.greenAccent[600]}
        >
          {props.increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
