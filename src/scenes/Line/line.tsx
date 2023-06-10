import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Header
        title="LINE CHART"
        subTitle="Please visualise you data in Line Chart"
      ></Header>
      <Box height="75vh">
        <LineChart></LineChart>
      </Box>
    </Box>
  );
};

export default Line;
