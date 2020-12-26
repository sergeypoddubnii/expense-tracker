import React from "react";
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from "@material-ui/core";
import useStyles from "./Main";

const Main = () => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardHeader title="Expence Tracker" subheader="Powered by Speechly" />
        <CardContent>
          <Typography align="center" variant="h5">
            Total balance 100$
          </Typography>
          <Typography variant="subtitle1" style={{ lineHeight: "1.5em", marginTop: "20px" }}>
            Try say something
          </Typography>
        </CardContent>
        <CardContent className={classes.cardContent}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {/* list  */}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default Main;
