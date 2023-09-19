import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";

export default async function NotFound() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Container>
        <Typography variant="h5" component="h2">
          Not Found: (
        </Typography>
        <p>Could not find requested resource</p>
        <p>
          <Link href="/">Return Home</Link>
        </p>
      </Container>
    </Box>
  );
}
