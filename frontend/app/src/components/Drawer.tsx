import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DataThresholdingIcon from "@mui/icons-material/DataThresholding";
import { Link } from "react-router-dom";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import Circle from "@mui/icons-material/Circle";
import { CircleOutlined } from "@mui/icons-material";

const drawerWidth = 240;

export default function ClippedDrawer() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        color="inherit"
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Jira Watcher 💥
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,

          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto", bgcolor: "#E5F2FF" }}>
          <List>
            <ListItemText
              primary="In Progress 🔥"
              sx={{
                color: "#92A4B1",
                display: "flex",
                marginLeft: 3,
              }}
            />
            <Box
              sx={{
                m: 2,
                bgcolor: "#FFFFFF",
                borderRadius: 3,
              }}
            >
              {["2022年1月", "2022年2月", "2022年3月"].map((text, index) => (
                <Link to={text} style={{ textDecoration: "none" }}>
                  <ListItem button key={text}>
                    <ListItemText
                      primary={text}
                      sx={{
                        color: "#2B2C2C",
                        display: "flex",
                        marginLeft: 1,
                      }}
                    />
                  </ListItem>
                </Link>
              ))}
            </Box>
          </List>

          <List>
            <ListItemText
              primary="Backlog 💬"
              sx={{
                color: "#92A4B1",
                display: "flex",
                marginLeft: 3,
              }}
            />
            <Box
              sx={{
                m: 2,
                bgcolor: "#FFFFFF",
                borderRadius: 3,
              }}
            >
              {["2023年1月", "2023年2月", "2023年3月"].map((text, index) => (
                <Link to={text} style={{ textDecoration: "none" }}>
                  <ListItem button key={text}>
                    <ListItemText
                      primary={text}
                      sx={{
                        color: "#2B2C2C",
                        display: "flex",
                        marginLeft: 1,
                      }}
                    />
                  </ListItem>
                </Link>
              ))}
            </Box>
          </List>

          <List>
            <ListItemText
              primary="Done 💔"
              sx={{
                color: "#92A4B1",
                display: "flex",
                marginLeft: 3,
              }}
            />
            <Box
              sx={{
                m: 2,
                bgcolor: "#FFFFFF",
                borderRadius: 3,
              }}
            >
              {["2021年1月", "2021年2月", "2021年3月"].map((text, index) => (
                <Link to={text} style={{ textDecoration: "none" }}>
                  <ListItem button key={text}>
                    <ListItemText
                      primary={text}
                      sx={{
                        color: "#2B2C2C",
                        display: "flex",
                        marginLeft: 1,
                      }}
                    />
                  </ListItem>
                </Link>
              ))}
            </Box>
          </List>

          {/* //TODO it's just for spacer */}
          <Box
            sx={{
              p: 15,
              bgcolor: "#E5F2FF",
            }}
          >
            {" "}
          </Box>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
