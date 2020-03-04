import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import AppBar from '../../components/home/AppBar';
import List from '../../components/home/List';
import { AppContextHome } from '../../context/AppContextHome';
import { getHackersNew } from '../../factory/hackersNew';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));




export default function Album() {
  const classes = useStyles();
  const [hackersNew, setHackersNew] = useState([]);
  const [confirm, setConfirm] = useState(undefined);

  useEffect(() => {
    async function loadHackersNew() {
      try {
        const hackersNew = await getHackersNew();
        setHackersNew(hackersNew);
      } catch (error) {
        console.log(error);
      }
    }

    loadHackersNew();
  }, []);

  // console.log(hackersNew);

  return (
    <AppContextHome.Provider value={{
      hackersNew,
      confirm,
      setConfirm
    }}>
      <React.Fragment>
        <CssBaseline />
        <AppBar></AppBar>
        <main>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="lg">
              <List></List>
            </Container>
          </div>
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Footer
        </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Something here to give the footer a purpose!
        </Typography>
          <Copyright />
        </footer>
        {/* End footer */}
      </React.Fragment>
    </AppContextHome.Provider>
  );
}