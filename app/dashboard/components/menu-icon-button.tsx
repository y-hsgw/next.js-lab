import { IconButton } from "@mui/material";
import { memo, useCallback } from "react";
import MenuIcon from "@mui/icons-material/Menu";

export const MenuIconButton: React.FC = memo(() => {
  const handleClick = useCallback(() => console.log("click!"), []);

  return (
    <IconButton color="inherit" edge="start" onClick={handleClick}>
      <MenuIcon />
    </IconButton>
  );
});

MenuIconButton.displayName = "MenuIconButton";
