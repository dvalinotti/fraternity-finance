import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core";

export default function HomeView() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.homeContainer}>
      <Paper className={classes.homePaper}>
        <Typography variant={"h4"} component={"h3"}>
          Dashboard
        </Typography>
      </Paper>
    </Container>
  );
}

const useStyles = makeStyles({
  homeContainer:{
    paddingTop: "45px"
  },
  homePaper: {
    padding: '45px'
  }
});