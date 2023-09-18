"use client";

import { Button } from "@mui/material";
import { memo, useCallback } from "react";

interface Props {
  setCookie: () => void;
}
export const CreateCookieButton: React.FC<Props> = memo(({ setCookie }) => {
  const handleClick = useCallback(() => {
    setCookie();
  }, [setCookie]);

  return (
    <Button variant="contained" onClick={handleClick}>
      Cookie 生成
    </Button>
  );
});

CreateCookieButton.displayName = "CreateCookieButton";
