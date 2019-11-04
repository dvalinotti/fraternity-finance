import React from 'react';
import './index.css';
import {MuiThemeProvider as ThemeProvider, createMuiTheme} from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import TabBar from "./components/TabBar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import orange from "@material-ui/core/colors/orange";
import BudgetView from "./views/BudgetView";

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    secondary: orange
  }
});

const styles = makeStyles({
  main: {
    display: 'flex',
    height: "inherit"
  }
});

export default function App() {
  const classes = styles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.main}>
        <TabBar/>
        <Router>
          <Switch>
            <Route to="/" component={HomeView} />
            <Route to="/budget" component={BudgetView} />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}
