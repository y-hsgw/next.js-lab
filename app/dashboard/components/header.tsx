"use client";

import { AppBar, Toolbar, Typography } from "@mui/material";
import { memo } from "react";
import { MenuIconButton } from "./menu-icon-button";

export const Header: React.FC = memo(() => {
  return (
    <AppBar position="absolute">
      <Toolbar>
        <MenuIconButton />
        <Typography component="h1" variant="h6" noWrap flexGrow={1}>
          Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
});

Header.displayName = "Header";
