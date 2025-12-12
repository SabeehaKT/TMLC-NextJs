import Head from "next/head";
import { useState } from "react"; //React Hook for State

// MUI Imports
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ThemeProvider } from "@emotion/react";
import {theme, darktheme} from "@/styles/mui/theme"; 
import { CssBaseline } from "@mui/material";

export default function MyAppBar() {
    const [currentTheme,setCurrentTheme] = useState("Light")

  return (
    <>
    <ThemeProvider theme = {currentTheme === "dark" ? darktheme : theme}>
        <CssBaseline/>
      <Box>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              
              <Typography variant="h6" component="Box" sx={{ flexGrow: 1 }}>
                News
              </Typography>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => 
                    setCurrentTheme(currentTheme === "dark" ? "Light" : "dark")
                }
              >
                <DarkModeIcon/>
              </IconButton>
        
              <Button color="inherit" href="blog">Blog</Button>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
      </Box>
      </ThemeProvider>
    </>
  );
}
