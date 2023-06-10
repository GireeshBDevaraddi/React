import { Box } from "@mui/material";
import BarChart from "../../components/BarChart";
import Header from "../../components/Header";


const Bar = () => {
    return (
      <Box m="20px">
        <Header
          title="BAR CHART"
          subTitle="Please visualise you data in Bar Chart"
        ></Header>
        <Box height="75vh">
          <BarChart></BarChart>
        </Box>
      </Box>
    );
}

export default Bar;