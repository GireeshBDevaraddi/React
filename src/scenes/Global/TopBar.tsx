import { Box, IconButton, InputBase, useTheme } from "@mui/material";

import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { ColorModeContext } from "../../theme";
import { useContext } from "react";

const TopBar = () => {
  const theme = useTheme();
  const colorContext = useContext(ColorModeContext);
  return (
    <Box p={2} display="flex" justifyContent="space-between">
      {/* Search Bar */}
      <Box
        display="flex"
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search "></InputBase>
        <IconButton type="button" sx={{ p: 1}}>
          <SearchOutlinedIcon></SearchOutlinedIcon>
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display={"flex"}>
        <IconButton onClick={colorContext.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon></NotificationsOutlinedIcon>
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon></SettingsOutlinedIcon>
        </IconButton>
        <IconButton>
          <PersonOutlineOutlinedIcon></PersonOutlineOutlinedIcon>
        </IconButton>
      </Box>
    </Box>
  );
};

export default TopBar;