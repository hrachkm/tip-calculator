import React from "react";
import { Container, Typography, Box, Grid } from "@mui/material";
import { Person } from "@mui/icons-material";

import { CalculatorContext } from "./context/calculator";
import { Text } from "./components/bill";
import { Tip } from "./components/tip";
import { Results } from "./components/results";

import "./App.css";

export default function App() {
  const {
    bill,
    person,
    billTouched,
    peopleTouched,
    setBill,
    setPerson,
    setBillTouched,
    setPeopleTouched,
  } = React.useContext(CalculatorContext);

  return (
    <>
      <Container
        disableGutters={false}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <Grid container justifyContent={"center"}>
          <Grid
            item
            alignContent={"center"}
            xs={5}
            md={1}
            sx={{ margin: "2rem" }}
          >
            <Typography
              component={"label"}
              sx={{
                textTransform: "uppercase",
                letterSpacing: "10px",
                fontWeight: "bold",
                color: '#4b6e70',
                wordWrap: "break-word",
                fontFamily: 'Chivo Mono'
              }}
            >
              Splitter
            </Typography>
          </Grid>
        </Grid>
        <Box
          sx={{
            backgroundColor: "#FFF",
            borderRadius: "2rem",
            display: "flex",
            flexDirection: "column",
            padding: { xs: "2rem" },
            marginTop: "1rem",
            width: { xs: "100%", md: "60%" },
          }}
        >
          <Grid container columnSpacing={4}>
            <Grid item xs={12} md={6}>
              <Text
                label="Bill"
                icon="$"
                value={bill}
                touched={billTouched}
                setTouched={setBillTouched}
                change={(ev) => setBill(parseInt(ev.target.value))}
              />
              <Tip />
              <Text
                label="Number of People"
                icon={<Person />}
                value={person}
                touched={peopleTouched}
                setTouched={setPeopleTouched}
                change={(ev) => setPerson(ev.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Results />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
