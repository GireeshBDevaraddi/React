import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useState } from "react";
import { Link } from "react-router-dom";

const mainRoutes = [
  {
    title: "Dashboard",
    ref: "/",
    icon: <HomeOutlinedIcon />,
  },
];

const dataRoutes = [
  {
    title: "Manage Team",
    ref: "/team",
    icon: <PeopleOutlinedIcon />,
  },
  {
    title: "Contact Information",
    ref: "/contacts",
    icon: <ContactsOutlinedIcon />,
  },
  {
    title: "Invoice Balances",
    ref: "/invoices",
    icon: <ReceiptOutlinedIcon />,
  },
];

const pagesRoutes = [
  {
    title: "Profile",
    ref: "/form",
    icon: <PersonOutlinedIcon />,
  },
  {
    title: "Calendar",
    ref: "/calender",
    icon: <CalendarTodayOutlinedIcon />,
  },
  {
    title: "FAQ",
    ref: "/faq",
    icon: <HelpOutlinedIcon />,
  },
];

const chartRoutes = [
  {
    title: "Bar Chart",
    ref: "/bar",
    icon: <BarChartOutlinedIcon />,
  },
  {
    title: "Pie Chart",
    ref: "/pie",
    icon: <PieChartOutlinedIcon />,
  },
  {
    title: "Line Chart",
    ref: "/line",
    icon: <TimelineOutlinedIcon />,
  },
  {
    title: "Geography Chart",
    ref: "/geography",
    icon: <MapOutlinedIcon />,
  },
];

const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .ps-sidebar-root": {
          border: "none",
        },
        "& .ps-sidebar-container": {
          background: `${colors.primary[600]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .ps-menu-button:hover": {
          color: "#868dfb !important",
          backgroundColor: "transparent !important",
        },
        "& .ps-menu-button.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <Sidebar style={{ height: "100%" }} collapsed={isCollapsed}>
        <Menu>
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0px 20px 0px",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  ml: "15px",
                }}
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="user-profile"
                  width="100px"
                  height="100px"
                  src={require(`../../assets/user.png`)}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{
                    m: "10px 0 0 0",
                  }}
                >
                  Gireesh Devaraddi
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[400]}>
                  Web Developer
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            {mainRoutes.map((item) => {
              return (
                <MenuItem
                  active={selected === item.title}
                  style={{ color: colors.grey[100] }}
                  onClick={() => setSelected(selected)}
                  icon={item.icon}
                  component={<Link to={item.ref} />}
                >
                  <Typography>{item.title}</Typography>
                </MenuItem>
              );
            })}
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            {dataRoutes.map((item) => {
              return (
                <MenuItem
                  active={selected === item.title}
                  style={{ color: colors.grey[100] }}
                  onClick={() => setSelected(selected)}
                  icon={item.icon}
                  component={<Link to={item.ref} />}
                >
                  <Typography>{item.title}</Typography>
                </MenuItem>
              );
            })}
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            {pagesRoutes.map((item) => {
              return (
                <MenuItem
                  active={selected === item.title}
                  style={{ color: colors.grey[100] }}
                  onClick={() => setSelected(selected)}
                  icon={item.icon}
                  component={<Link to={item.ref} />}
                >
                  <Typography>{item.title}</Typography>
                </MenuItem>
              );
            })}
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            {chartRoutes.map((item) => {
              return (
                <MenuItem
                  active={selected === item.title}
                  style={{ color: colors.grey[100] }}
                  onClick={() => setSelected(selected)}
                  icon={item.icon}
                  component={<Link to={item.ref} />}
                >
                  <Typography>{item.title}</Typography>
                </MenuItem>
              );
            })}
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SideBar;
