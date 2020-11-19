const style = (theme) => ({
  drawerPaper: {
    width: 240,
    zIndex: 99,
    maxWidth: 240,
    height: '100%',
    position: 'relative'
  },
  menuLink: {
    textDecoration: 'none',
    color: '#000'
  },
  menuLinkActive: {
    '&>div': {
      backgroundColor: '#eee'
    }
  },
  drawer: {
    height: '100vh'
  }
});

export default style;
