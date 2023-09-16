import { Metadata } from "next";
import { Stack, Typography } from "@mui/material";
import { ErrorButton } from "./components/error-button";

export const metadata: Metadata = {
  title: "Error Demo Page",
};

export default function Page() {
  return (
    <Stack justifyContent="center" alignItems="center" mt={4} gap={2}>
      <Typography>Error Demo Page</Typography>
      <ErrorButton />
    </Stack>
  );
}
