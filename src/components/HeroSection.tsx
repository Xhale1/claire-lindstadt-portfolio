import { Box, Grid, Link, Typography } from "@mui/material";

export default function HeroSection(): JSX.Element {
  return (
    <Grid container spacing={3} sx={{ py: 6 }}>
      <Grid item xs={12} md={6}>
        <Typography variant="h1">Claire Lindstadt</Typography>
        <Typography variant="body1">
          San Francisco bay area designer specializing in web and mobile UX.
        </Typography>
        <Box sx={{ my: 3 }}>
          <Link href="tel:4254423383" sx={{ pr: 2 }}>
            (425) 442-3383
          </Link>
          <Link href="mailto:clindstadt@scu.edu">clindstadt@scu.edu</Link>
        </Box>
        <Link
          href="https://www.linkedin.com/in/claire-lindstadt"
          rel="noopener"
          target="_blank"
        >
          LinkedIn
        </Link>
      </Grid>
    </Grid>
  );
}
