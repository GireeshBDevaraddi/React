import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import GeoChart from "../../components/GeoChart";
import { tokens } from "../../theme"

const Geography = () => {
    const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header
        title="LINE CHART"
        subTitle="Please visualise you data in Line Chart"
      ></Header>
      <Box height="75vh" border={`1px solid ${colors.grey[100]}`} borderRadius="4px">
        <GeoChart></GeoChart>
      </Box>
    </Box>
  );
};

export default Geography;
