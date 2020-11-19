import { Drawer, List, withStyles } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import React from 'react';
import { ADMIN_ROUTER } from './../../../constants';
import { NavLink } from 'react-router-dom';
import style from './style';
import { useSelector } from 'react-redux';

const Sidebar = ({ classes, }) => {
  const open = useSelector(state => state.ui.hideSidebar);
  const drawer = () => {
    let xhtml = null;
    xhtml = <div>
      <List component="div">
        {
          ADMIN_ROUTER.map((item, index) => {
            return (
              <NavLink
                key={index}
                to={item.path}
                exact={item.exact}
                className={classes.menuLink}
                activeClassName={classes.menuLinkActive}
              >
                <ListItem
                  key={index}
                >
                  {item.name}
                </ListItem>
              </NavLink>
            );
          })
        }
      </List>
    </div>;
    return xhtml;
  };

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      {drawer()}
    </Drawer>
  );
};

export default withStyles(style)(Sidebar);
