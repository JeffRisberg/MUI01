import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {fade} from '@material-ui/core/styles/colorManipulator';
import {NavLink} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import AccountCircle from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
   root: {
      width: '100%',
   },
   grow: {
      flexGrow: 1,
   },
   menuButton: {
      marginLeft: -12,
      marginRight: 20,
   },
   title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
         display: 'block',
      },
   },
   navLink: {
      textDecoration: 'none'
   },
   search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
         backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing.unit * 2,
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
         marginLeft: theme.spacing.unit * 3,
         width: 'auto',
      },
   },
   searchIcon: {
      width: theme.spacing.unit * 9,
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
   },
   inputRoot: {
      color: 'inherit',
      width: '100%',
   },
   inputInput: {
      paddingTop: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 10,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
         width: 200,
      },
   },
   sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
         display: 'flex',
      },
   },
   sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
         display: 'none',
      },
   }
});

class Navigation extends Component {
   static propTypes = {
      classes: PropTypes.object.isRequired,
      history: PropTypes.object
   };

   state = {
      anchorEl: null
   };

   handleMenuOpen = event => {
      this.setState({anchorEl: event.currentTarget});
   };

   handleMenuClose = () => {
      this.setState({anchorEl: null});
   };

   render() {
      const {anchorEl} = this.state;

      const {classes, history} = this.props;
      const isMenuOpen = Boolean(anchorEl);

      let title = history.location.pathname.replace(/^\/([^/]*)(?:[/\d]+([^/]+))?.*?$/, '$1 $2');

      if (title === null || title === '' || title === ' ') title = 'Home';

      const renderMenu = (
         <Menu
            anchorEl={anchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMenuOpen}
            onClose={this.handleMenuClose}
         >
            <MenuItem onClick={this.handleMenuClose}>
               <NavLink className={classes.navLink} to='/'>
                  Home
               </NavLink>
            </MenuItem>
            <MenuItem onClick={this.handleMenuClose}>
               <NavLink className={classes.navLink} to='/dashboard'>
                  Dashboard
               </NavLink>
            </MenuItem>
            <MenuItem onClick={this.handleMenuClose}>
               <NavLink className={classes.navLink} to='/catalog'>
                  Catalog
               </NavLink>
            </MenuItem>
            <MenuItem onClick={this.handleMenuClose}>
               <NavLink className={classes.navLink} to='/profile'>
                  Profile
               </NavLink>
            </MenuItem>
         </Menu>
      );

      return (
         <div className={classes.root}>
            <AppBar position="static">
               <Toolbar>
                  <IconButton className={classes.menuButton} color="inherit"
                              aria-haspopup="true" onClick={this.handleMenuOpen} aria-label="Menu">
                     <MenuIcon/>
                  </IconButton>
                  <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                     {title.toUpperCase()}
                  </Typography>
                  <div className={classes.search}>
                     <div className={classes.searchIcon}>
                        <SearchIcon/>
                     </div>
                     <InputBase
                        placeholder="Search…"
                        classes={{
                           root: classes.inputRoot,
                           input: classes.inputInput,
                        }}
                     />
                  </div>
                  <div className={classes.grow}/>
                  <div className={classes.sectionDesktop}>
                     <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                           <MailIcon/>
                        </Badge>
                     </IconButton>
                     <IconButton color="inherit">
                        <Badge badgeContent={17} color="secondary">
                           <NotificationsIcon/>
                        </Badge>
                     </IconButton>
                     <IconButton color="inherit">
                        <AccountCircle/>
                     </IconButton>
                  </div>
               </Toolbar>
            </AppBar>
            {renderMenu}
         </div>
      );
   }
}

export default withStyles(styles)(Navigation);
