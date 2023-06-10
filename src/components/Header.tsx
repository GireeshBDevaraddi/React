import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

type HeaderProps = {
  title: string;
  subTitle: string;
};


const Header = ({ title, subTitle }: HeaderProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box mb="30px">
        <Typography variant="h2" color={colors.grey[100]} sx={{ mb: "5px" }}>
          {title}
        </Typography>
        <Typography variant="h5" color={colors.greenAccent[400]}>
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
