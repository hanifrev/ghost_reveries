import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ProTip from "../src/ProTip";
import Link from "../src/Link";
import Copyright from "../src/Copyright";
import { makeStyles } from "@material-ui/core";
import Theme from "../src/theme";

const useStyles = makeStyles((Theme) => ({
  root: {
    backgroundColor: "#D2D2D2",
    width: "100%",
    maxWidth: Theme.breakpoints.values.xl,
    height: "100vh",
  },
  title: {
    color: Theme.palette.primary.second,
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Box>
        <Typography variant="h1" component="h1" className={classes.title}>
          Blackwater Park
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
