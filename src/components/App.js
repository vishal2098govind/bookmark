import React from 'react';
import Nav from './Nav';
import Topic from './Topics';
import { Subject } from './Subject';
import SubTopic from './SubTopic';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import db from '../utils/db';

class App extends React.Component {
  componentDidMount = () => {
    const dbLocal = localStorage.getItem('db');
    if (!dbLocal) {
      localStorage.setItem('db', JSON.stringify(db));
    }
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
              <Route
                path='/tp/:id/subtp/:id'
                render={props => (
                  <SubTopic
                    {...props}
                    subject={props.match.url.substr(
                      4,
                      props.match.url.search('/subtp/') - 4
                    )}
                    topic={props.match.params.id}
                  />
                )}
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
