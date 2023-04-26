import React from "react";
import { Grid, Box, Typography, Button, TextField } from "@mui/material";
import { CalculatorContext } from "../context/calculator";

import "./tip.css";

export const Tip = () => {
  const { setTipPercent } = React.useContext(CalculatorContext);
  const tips = [
    {
      label: "5%",
      value: 0.05,
    },
    {
      label: "10%",
      value: 0.1,
    },
    {
      label: "15%",
      value: 0.15,
    },
    {
      label: "25%",
      value: 0.25,
    },
    {
      label: "50%",
      value: 0.5,
    },
  ];
  return (
    <Box sx={{ display: "flex", flexDirection: "column", paddingY: "0.5rem" }}>
      <Typography
        component={"label"}
        sx={{
          fontFamily: "Chivo Mono",
          fontSize: "12px",
          fontWeight: "bold",
          letterSpacing: "1px",
          color: "#627172",
          paddingY: '10px',
        }}
      >
        Select Tip %
      </Typography>
      <Grid container spacing={2}>
        {tips.map((tip, index) => (
          <Grid item key={index} xs={6} md={4}>
            <Button
              sx={{
                backgroundColor: "#00474d",
                color: "#FFF",
                width: "100%",
                paddingY: "rem",
                fontFamily: "Chivo Mono",
                fontWeight: 'bold',
                ":hover": {
                  backgroundColor: "#00474d",
                  color: "#FFF",
                },
                ":focus": {
                  backgroundColor: "#25c3ae",
                  color: "#000",
                },
              }}
              onClick={() => setTipPercent(tip.value)}
            >
              {tip.label}
            </Button>
          </Grid>
        ))}
        <Grid item xs={6} md={4}>
          <TextField
            dir="rtl"
            placeholder="Custom"
            onChange={(ev) => setTipPercent(ev.target.value / 100)}
            sx={{
              input: {
                padding: "7px",
                backgroundColor: "#f3f8fa",
                fontFamily: "Chivo Mono",
                fontWeight: 'bold',
                color: '#00474d',
                "&::placeholder": {
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#637c7b",
                },
              },
            }}
          ></TextField>
        </Grid>
      </Grid>
    </Box>
  );
};
