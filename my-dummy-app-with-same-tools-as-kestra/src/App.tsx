import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { incremented, amountAdded } from "./features/counter/counter-slice";
import logo from "./logo.svg";
import "./App.css";
import { useFetchAstronautsQuery } from "./features/astronauts/astronaut-api-slice";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckBox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";

import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";

import { orange, green, blue } from "@material-ui/core/colors";
import "fontsource-roboto";
import Typography from "@material-ui/core/Typography";

import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/icons/Menu";

import ImageCard from "./components/ImageCard";
import NavBar from "./components/NavBar";

// THe below import is for latest version 5 materialUI
// import { ThemeProvider } from "@mui/material/styles";
import customTheme from "./assets/theme";

console.log(customTheme);

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B, #FF8E53)",
    border: 0,
    marginBottom: 15,
    borderRadius: "15px",
    color: "white",
    padding: "5px 30px",
  },
});

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 15,
    },
  },
  palette: {
    primary: {
      main: green[400],
    },
    secondary: {
      main: orange[400],
    },
  },
});

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>;
}

function CheckBoxExample() {
  const [checked, setChecked] = useState(true);
  return (
    <FormControlLabel
      control={
        <CheckBox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          icon={<DeleteIcon />}
          checkedIcon={<SaveIcon />}
          color="primary"
          // disabled
          inputProps={{
            "aria-label": "secondary checkbox",
          }}
        />
      }
      label="Testing CheckBox"
    />
  );
}

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const { data = [], isFetching } = useFetchAstronautsQuery();

  const handleClick = () => {
    //incremented by 1
    // dispatch(incremented());

    //incremented by a specific value, in this case its "3"
    dispatch(amountAdded(3));
  };

  return (
    // <ThemeProvider theme={theme}>
    // <Container maxWidth="md">
    <ThemeProvider theme={customTheme}>
      <div className="App">
        <NavBar />
        <ImageCard />

        {/* below from <header> to </header> is the first Material UI Practice that 
      does not use the latest version 5 of Material UI */}
        {/* <header className="App-header"> */}
        {/* <AppBar color="secondary">
              <ToolBar>
                <IconButton>
                  <Menu />
                </IconButton>
                <Typography variant="h6">MUI Theming</Typography>
                <Button>Login</Button>
              </ToolBar>
            </AppBar>
            <Typography variant="h2" component="div">
              Welcome to MUI
            </Typography>
            <Typography variant="subtitle1">Learn How to Use MUI</Typography> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        {/* <ButtonStyled />
            <TextField
              variant="outlined"
              color="secondary"
              type="email"
              label="Email"
              // value="test@testing.com"
              placeholder="test@testing.com"
            />
            <Grid container spacing={2} justify="center"> */}
        {/* <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid> */}
        {/* <Grid item xs>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid>
              <Grid item xs>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid>
              <Grid item xs>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid>
            </Grid> */}

        {/* <TextField
          variant="filled"
          color="secondary"
          type="date"
          label="The Date"
        /> */}
        {/* <TextField variant="outlined" color="secondary" type="time" /> */}
        {/* <CheckBoxExample />
            <ButtonGroup variant="contained" size="small">
              <Button
                startIcon={<SaveIcon />}
                // endIcon={<SaveIcon />}
                style={{ fontSize: "14px" }}
                color="primary"
                onClick={handleClick}
              >
                count: {count}
              </Button>
              <Button
                startIcon={<DeleteIcon />}
                // endIcon={<SaveIcon />}
                style={{ fontSize: "14px" }}
                color="secondary"
                // onClick={handleClick}
              >
                Save
              </Button>
            </ButtonGroup> */}
        {/* </header> */}

        <div>
          <ButtonGroup variant="contained" size="small">
            <Button
              startIcon={<SaveIcon />}
              // endIcon={<SaveIcon />}
              style={{ fontSize: "14px" }}
              color="primary"
              onClick={handleClick}
            >
              count: {count}
            </Button>
            <Button
              startIcon={<DeleteIcon />}
              // endIcon={<SaveIcon />}
              style={{ fontSize: "14px" }}
              color="secondary"
              // onClick={handleClick}
            >
              Save
            </Button>
          </ButtonGroup>
          <p>Number of Dogs Fetched: {data.length}</p>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Service</th>
              </tr>
            </thead>
            <tbody>
              {data.map((astronaut) => (
                <tr key={astronaut.astronaut_id}>
                  <td>{astronaut.name}</td>
                  <td>{astronaut.service}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* //   </Container> */}
    </ThemeProvider>
  );
}

export default App;
