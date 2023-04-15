import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { ClickAwayListener, Collapse } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openCommer, setOpenCommer] = React.useState(false);
  const [openWedding, setOpenWedding] = React.useState(false);
  const [openPortfoli, setOpenPortfoli] = React.useState(false);
  const [openOther, setOpenOther] = React.useState(false);

  const handleClickPortfoli = () => {
    setOpenPortfoli(!openPortfoli);
  };
  const handleClickwedding = () => {
    setOpenWedding(!openWedding);
  };
  const handleClickcommer = () => {
    setOpenCommer(!openCommer);
  };
  const handleClickother = () => {
    setOpenOther(!openOther);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleDrawerClose}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              zIndex:8,
              mr: 4,
              ...(open && { display: "none" }),
              position: "fixed",
              right: "0",
              marginRight: "10px",
              ":hover": { cursor: "pointer" },
              scale: "150%",
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>

        <Drawer
          sx={{
            zIndex:8,
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: "rgb(65,65,65)",
              color: "white",
              opacity: "0.7",
            },
          }}
          variant="persistent"
          anchor="right"
          open={open}
          onClose={(_, reason) => {
            if (reason === "backdropClick") {
              handleDrawerClose();
            }
          }}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>

          <List>
            <ListItem disablePadding>
              <ListItemButton href="/">
                <ListItemText primary={"Home"} sx={{ marginLeft: "25%" }} />
              </ListItemButton>
            </ListItem>
            {/* <ListItem disablePadding>
              <ListItemButton href="/travel">
                <ListItemText primary={"Travel"} sx={{ marginLeft: "25%" }} />
              </ListItemButton>
            </ListItem> */}

            <ListItem disablePadding>
              <ListItemButton onClick={handleClickPortfoli}>
                <ListItemText
                  primary={"Portfolio"}
                  sx={{ marginLeft: "25%" }}
                />
                {openPortfoli ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse
              in={openPortfoli}
              timeout="auto"
              sx={{ marginLeft: "20%" }}
              unmountOnExit
            >
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }} onClick={handleClickcommer}>
                  <ListItemText primary="Commercial" />
                  {openCommer ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse
                  in={openCommer}
                  timeout="auto"
                  sx={{ marginLeft: "10%" }}
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    <ListItemButton href="/jewellery" sx={{ pl: 4 }}>
                      <ListItemText primary="Jewellery" />
                    </ListItemButton>
                  </List>
                  <List component="div" disablePadding>
                    <ListItemButton href="food" sx={{ pl: 4 }}>
                      <ListItemText primary="Food" />
                    </ListItemButton>
                  </List>
                  <List component="div" disablePadding>
                    <ListItemButton href="products" sx={{ pl: 4 }}>
                      <ListItemText primary="Product" />
                    </ListItemButton>
                  </List>
                </Collapse>
              </List>
              <List component="div" disablePadding>
                <ListItemButton href="/potraits" sx={{ pl: 4 }}>
                  <ListItemText primary="Potraits" />
                </ListItemButton>
              </List>
              <List component="div" onClick={handleClickwedding} disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Wedding" />

                  {openWedding ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse
                  in={openWedding}
                  timeout="auto"
                  sx={{ marginLeft: "10%" }}
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    <ListItemButton href="prewed" sx={{ pl: 4 }}>
                      <ListItemText primary="Pre Memories" />
                    </ListItemButton>
                  </List>
                </Collapse>
              </List>
              <List component="div" onClick={handleClickother} disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Others" />

                  {openOther ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse
                  in={openOther}
                  timeout="auto"
                  sx={{ marginLeft: "10%" }}
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    <ListItemButton href="maternity" sx={{ pl: 4 }}>
                      <ListItemText primary="Maternity" />
                    </ListItemButton>
                  </List>
                  <List component="div" disablePadding>
                    <ListItemButton href="babyshower" sx={{ pl: 4 }}>
                      <ListItemText primary="Baby Shower" />
                    </ListItemButton>
                  </List>
                  <List component="div" disablePadding>
                    <ListItemButton href="baby" sx={{ pl: 4 }}>
                      <ListItemText primary="Baby" />
                    </ListItemButton>
                  </List>
                </Collapse>
              </List>
            </Collapse>

            <ListItem disablePadding>
              <ListItemButton href="/about">
                <ListItemText primary={"About"} sx={{ marginLeft: "25%" }} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton href="/contact">
                <ListItemText primary={"Contact"} sx={{ marginLeft: "25%" }} />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
      </Box>
    </ClickAwayListener>
  );
}
