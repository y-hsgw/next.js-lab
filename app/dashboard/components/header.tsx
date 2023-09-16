import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { memo } from "react";
import MenuIcon from "@mui/icons-material/Menu";

export const Header: React.FC = memo(() => {
  return (
    <AppBar position="absolute">
      <Toolbar>
        <IconButton color="inherit" edge="start">
          <MenuIcon />
        </IconButton>
        <Typography component="h1" variant="h6" noWrap flexGrow={1}>
          Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
});

Header.displayName = "Header";
