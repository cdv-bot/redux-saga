const style = (theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
      width: '50ch',

    },
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'wheat',
  },
  modal: {
    display: 'flex',
    padding: theme.spacing(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  texts: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#00FF00',
    padding: theme.spacing(2),
    fontSize: theme.spacing(3),
    alignItems: 'center'
  },
  icon: {
    cursor: 'pointer',
    fontSize: '15'
  }
});

export default style;
