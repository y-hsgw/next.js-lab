import { Metadata } from "next";
import { Box, Container, Toolbar } from "@mui/material";
import { sleep } from "../utils/sleep";
import { Header } from "./components/header";

export const metadata: Metadata = {
  title: "Dashboard Page",
};

export default async function Page() {
  await sleep(2000);

  return (
    <Box display="flex">
      <Header />
      <Box component="main" flexGrow={1} height="100vh">
        <Toolbar />
        <Container sx={{ mt: 4 }}>
          <h1>Hello, Next.js! This Page is Dashboard</h1>
        </Container>
      </Box>
    </Box>
  );
}
