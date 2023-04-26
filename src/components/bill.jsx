
import {
  Grid,
  Box,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";

// eslint-disable-next-line react/prop-types
export const Text = ({ label, icon, change, value, touched, setTouched }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", paddingY: "1rem" }}>
      <Grid container justifyContent={"space-between"}>
        <Grid item>
          <Typography
            component={"label"}
            sx={{
              fontFamily: "Chivo Mono",
              fontSize: "12px",
              fontWeight: "bold",
              letterSpacing: '1px',
              color: "#627172",
            }}
          >
            {label}
          </Typography>
        </Grid>
        <Grid item>
          {touched && value < 1 && (
            <Typography
              component={"p"}
              sx={{
                color: "red",
                fontFamily: "Chivo Mono",
                fontSize: "12px",
                fontWeight: "bold",
                letterSpacing: '1px',
              }}
            >
              Can't be zero
            </Typography>
          )}
        </Grid>
      </Grid>
      <TextField
        error={touched && value < 1}
        dir="rtl"
        type="number"
        placeholder="0"
        onChange={change}
        value={value}
        onBlur={() => setTouched(true)}
        sx={{
          input: {
            color: "#00474d",
            fontWeight: "Bold",
            fontSize: "1rem",
            padding: "7px",
            fontFamily: "Chivo Mono",
          },
        }}
        InputProps={{
          endAdornment: <InputAdornment position="end">{icon}</InputAdornment>,
        }}
      />
    </Box>
  );
};
