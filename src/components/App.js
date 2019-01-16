import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Card from 'material-ui/Card';

import { withStyles } from 'material-ui/styles';
import withRoot from './withRoot';

const styles = {
  root: {
    textAlign: 'center',
    paddingTop: 200,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 500,
  },
  card: {
    paddingTop: 40,
    paddingRight: 20,
    paddingBottom: 20,
    paddingLeft: 20,
  },
};

const App = props => (
  <div className={props.classes.root}>
    <Card className={props.classes.card}>
      This is MUI01
      <Footer />
    </Card>
  </div>
);

export default App;
//export default withRoot(withStyles(styles)(App));
