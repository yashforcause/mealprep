// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Blue
    },
    secondary: {
      main: "#dc004e", // Red
    },
  },
  typography: {
    h6: {
      fontWeight: "bold",
    },
    body2: {
      color: "#616161", // Dark Gray
    },
  },
});

export default theme;
