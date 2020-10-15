import React from 'react';
import Nav from './Nav';
import Topic from './Topics';
import { Subject } from './Subject';
import SubTopic from './SubTopic';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import db from '../utils/db';

class App extends React.Component {
  state = {
    url: null,
    subTopic: null,
    subject: null,
    topic: null,
  };

  componentDidMount = () => {
    const dbLocal = localStorage.getItem('db');
    if (!dbLocal) {
      localStorage.setItem('db', JSON.stringify(db));
    }
  };

  onBookmarkSubmit = (url, subTopic, subject, topic) => {
    this.setState({ url, subTopic, subject, topic });
  };

  render() {
    return (
      <div>
        <Router>
          <Nav onBookmarkSubmit={this.onBookmarkSubmit} />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Subject} />
              <Route exact path='/tp/:id' component={Topic} />
              <Route path='/tp/:id/subtp/:id' component={SubTopic} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
