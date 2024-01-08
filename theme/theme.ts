import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const FONT_FAMILY = '"Open Sans Variable", sans-serif';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: FONT_FAMILY,
  },
});

export default theme;
