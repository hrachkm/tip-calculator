import React from "react";
import { CalculatorContext } from "../context/calculator";
import { Grid, Box, Typography, Button } from "@mui/material";

export const Results = () => {
  const { tip, total, cleanStates } = React.useContext(CalculatorContext);
  const typographyH3 = {
    color: "#FFF",
    fontFamily: 'Chivo Mono',
    fontWeight: "bold",
  };
  const typographyP = {
    color: "#7aa3a8",
    fontFamily: 'Chivo Mono',
    fontWeight: "bold",
    fontSize: "0.9rem",
  };
  const result = {
    fontSize: "2rem",
    fontFamily: 'Chivo Mono',
    fontWeight: "bold",
    color: "#28c4ad",
  };
  const spanStyle = { fontSize: "1.5rem", paddingBottom: "5px" };
  return (
    <Box
      sx={{
        backgroundColor: "#00474d",
        padding: { xs: "1rem", md: "2rem" },
        borderRadius: "1rem",
      }}
    >
      <Grid container>
        <Grid container justifyContent={"space-around"} spacing={5}>
          <Grid item xs={6}>
            <Typography component={"h3"} sx={typographyH3}>
              Tip Amount
            </Typography>
            <Typography component={"p"} sx={typographyP}>
              / person
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography component={"h2"} textAlign={"end"} sx={result}>
              <span style={spanStyle}>$</span> {tip}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography component={"h3"} sx={typographyH3}>
              Total
            </Typography>
            <Typography component={"p"} sx={typographyP}>
              / person
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography component={"h2"} textAlign={"end"} sx={result}>
              <span style={spanStyle}>$</span> {total}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              disabled={(tip < 1) && (total < 1)}
              onClick={() => {

                cleanStates()
              }}
              sx={{
                backgroundColor: "#26c2ad",
                color: "#000",
                width: "100%",
                marginTop: { md: "15%" },
                fontFamily: 'Chivo Mono',
                fontWeight: 'bold',
                ":disabled": {backgroundColor: "#0d686d", color: "#000"},
                ":hover": { backgroundColor: "#9fe8df" },
              }}
            >
              Reset
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
