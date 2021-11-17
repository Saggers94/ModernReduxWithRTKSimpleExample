import { createTheme } from "@mui/material";
import { purple, orange, red, green, blue } from "@mui/material/colors";

const primaryColor = purple[900];
const secondaryColor = green[600];
const dangerColor = red[900];
const errorColor = blue[900];

const customTheme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    error: {
      main: errorColor,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontStyle: "italic",
          fontSize: "1rem",
          "&:hover": {
            color: "#fff",
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: dangerColor,
            marginBottom: 50,
          },
        },
      },
    },
  },
});

export default customTheme;
