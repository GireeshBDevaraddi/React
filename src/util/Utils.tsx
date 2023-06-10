import { Box } from "@mui/material";
import Header from "../components/Header";

export const getHeaderCompent = (title: string, subTitle: string) => {
    return (
      
          <Header
            title={title}
            subTitle={subTitle}
          ></Header>
    );
}