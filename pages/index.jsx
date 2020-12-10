import { Fragment } from "react";
import Image from 'next/image';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  paper: {
    borderRadius: "100%",

  }
});

const Home = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid spacing={3} style={{ paddingTop: "20px" }} container justify="center">
        <Grid  item  xs={12} sm={4} >
          <img  style={{display:"inline-block",width:"100%",height:"auto"}}src="/images/photo.jpg"/>
        </Grid>
        <Grid item xs={12} sm={8}>
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, ratione officia incidunt quae ipsam sunt reiciendis illo atque laboriosam numquam debitis iure recusandae harum minus voluptate, quam explicabo dolor sequi!</h4>
        </Grid>
      </Grid>
    </Fragment>
  );
};


export default Home;