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
    bookmarks: null,
  };

  componentDidMount = () => {
    const dbLocal = localStorage.getItem('db');
    if (!dbLocal) {
      localStorage.setItem('db', JSON.stringify(db));
    }
  };

  onBookmarkSubmit = (url, subTopic, subject, topic, bookmarks) => {
    this.setState({ url, subTopic, subject, topic, bookmarks });
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
                    subject={
                      this.state.subject ||
                      props.match.url.substr(
                        4,
                        props.match.url.search('/subtp') - 4
                      )
                    }
                    topic={this.state.topic || props.match.params.id}
                    subTopic={this.state.subTopic}
                    url={this.state.url}
                    bookmarks={
                      this.state.bookmarks ||
                      JSON.parse(localStorage.getItem('db'))
                        .filter(
                          sub =>
                            sub.sub ===
                            props.match.url.substr(
                              4,
                              props.match.url.search('/subtp') - 4
                            )
                        )[0]
                        .topics.filter(
                          tp => tp.topic === props.match.params.id
                        )[0].bookmarks
                    }
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
