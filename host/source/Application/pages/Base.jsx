import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Container from '@material-ui/core/Container';
import HomeIcon from '@material-ui/icons/Home';
import WidgetsIcon from '@material-ui/icons/Widgets';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Tooltip from '@material-ui/core/Tooltip';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      <Link color="inherit" href="https://me.knnect.com/">
        Knnect
      </Link>
      {' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  root2: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    width: '100%',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function MiniDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const { children } = props;
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            <Link color="inherit" underline="none" component={RouterLink} to="/">
              Micro Frontend Demo
              {' '}
            </Link>
            <Typography variant="caption" noWrap>
              Using Webpack Module Federation & ReactJS
            </Typography>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link underline="none" component={RouterLink} to="/welcome">
            <ListItem button>
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText primary="Welcome" />
            </ListItem>
          </Link>
          <Link underline="none" component={RouterLink} to="/federated-component">
            <Tooltip
              PopperProps={{
                popperOptions: {
                  modifiers: {
                    flip: {
                      enabled: false,
                    },
                    offset: {
                      offset: '0,0',
                    },
                  },
                },
              }}
              placement="right"
              title="Demo"
              arrow
            >
              <ListItem button>
                <ListItemIcon><WidgetsIcon /></ListItemIcon>
                <ListItemText primary="Demo Link" />
              </ListItem>
            </Tooltip>
          </Link>
          <Link underline="none" component={RouterLink} to="/pricing">
            <ListItem button>
              <ListItemIcon><AttachMoneyIcon /></ListItemIcon>
              <ListItemText primary="Sample Pricing" />
            </ListItem>
          </Link>
          <Link underline="none" component={RouterLink} to="/error">
            <ListItem button>
              <ListItemIcon><AttachMoneyIcon /></ListItemIcon>
              <ListItemText primary="Sentry testing" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
      <div className={classes.root2}>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
        <footer className={classes.footer}>
          <Container maxWidth="sm">
            <Typography variant="body1">Knnect sample MF web app</Typography>
            <Copyright />
          </Container>
        </footer>
      </div>
    </div>
  );
}
