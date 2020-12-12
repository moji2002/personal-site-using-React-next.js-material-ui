import { Fragment, useEffect } from "react";
import { useRouter } from 'next/router';
import Image from 'next/image';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import Head from "next/head";


const useStyles = makeStyles({
  paper: {
    borderRadius: "100%",
  }
});

const Home = () => {
  const router = useRouter();
  const classes = useStyles();

  useEffect(() => {
    router.prefetch('/contact');
    router.prefetch('/portfolio');
    router.prefetch('/repos');
    router.prefetch('/skills');
  }, []);


  return (
    <Fragment>
      <Head>
        <title>Home | Mojtaba Beheshti</title>
      </Head>
      <Grid spacing={3} style={{ paddingTop: "20px" }} container justify="center">
        <Grid item xs={12} sm={4} >
          <Image width="300" height="300" src="/images/photo.jpg"></Image>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography variant="h2">Hello, I'm Mojtaba Beheshti.</Typography>
          <Typography variant="h3">I'm a front-end Developer.</Typography>
          <Typography variant="h6" >I love working with JS and it's libraries</Typography>
        </Grid>
      </Grid>
    </Fragment>
  );
};


export default Home;