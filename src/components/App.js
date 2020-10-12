import React from 'react';
import Nav from './Nav';
import Topic from './Topics';
import { Subject } from './Subject';
import SubTopic from './SubTopic';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  state = {
    url: null,
    Subject: null,
    Topic: null,
    subTopic: null,
  };

  onBookmarkSubmit = (url, Subject, Topic, subTopic) => {
    this.setState({ url, Subject, Topic, subTopic });
  };

  render() {
    return (
      <div>
        <Router>
          <Nav />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Subject} />
              <Route exact path='/tp/:id' component={Topic} />
              <Route
                path='/tp/:id/subtp/:id'
                render={props => (
                  <SubTopic
                    {...props}
                    subject={this.state.Subject}
                    topic={this.state.Topic}
                    subTopic={this.state.subTopic}
                    url={this.state.url}
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
