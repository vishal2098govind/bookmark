import React from 'react';
import Nav from './Nav';
import Subject from './Subject';
import Subjects from './Subjects';
import Topic from './Topic';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends React.Component {
  render() {
    return <div>
      <Router>
        <Nav/>
        <div className='container'>
        <Switch>
          <Route exact path='/' component={Subjects} />
          <Route path='/sub/:id' component={Subject} />
          <Route path='/tp' component={Topic} />
        </Switch>
        </div>
      </Router>
    </div>
  }
}

export default App;