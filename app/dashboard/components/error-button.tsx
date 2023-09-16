"use client";

import { Button } from "@mui/material";
import { memo, useCallback, useEffect } from "react";

export const ErrorButton: React.FC = memo(() => {
  const handleClick = useCallback(async () => {
    throw new Error("Error");
  }, []);

  return (
    <Button variant="contained" color="error" onClick={handleClick}>
      Execute Error
    </Button>
  );
});

ErrorButton.displayName = "ErrorButton";
