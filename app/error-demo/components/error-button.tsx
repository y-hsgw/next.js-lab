"use client";

import { Button } from "@mui/material";
import { memo, useCallback, useState } from "react";
import { ThrowError } from "./throw-error";

export const ErrorButton: React.FC = memo(() => {
  const [isError, setIsError] = useState(false);

  const handleClick = useCallback(async () => {
    setIsError(true);
  }, []);

  return (
    <>
      <Button variant="contained" color="error" onClick={handleClick}>
        Execute Error
      </Button>
      {isError && <ThrowError />}
    </>
  );
});

ErrorButton.displayName = "ErrorButton";
