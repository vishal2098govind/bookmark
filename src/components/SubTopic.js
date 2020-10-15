// import React from 'react';
import React from 'react';
import { Card, CardHeader, Collapse } from 'reactstrap';
import Bookmarks from './Bookmarks';
import { Link } from 'react-router-dom';
import AddURLSub from './AddURLSub';
export default class SubTopic extends React.Component {
  state = {
    collapse: -1,
  };
  onAdd = () => {
    this.setState({
      collapse: -1,
    });
  };
  toggle = e => {
    console.log(this.state);
    let event = e.target.dataset.event;
    this.setState({
      collapse: this.state.collapse === Number(event) ? -1 : Number(event),
    });
  };
  render() {
    const subject = this.props.location.pathname.substr(
      4,
      this.props.location.pathname.search('/subtp/') - 4
    );
    const topic = this.props.match.params.id;
    const bookmarks = JSON.parse(localStorage.getItem('db'))
      .filter(subj => subj.sub === subject)[0]
      .topics.filter(tp => tp.topic === topic)[0].bookmarks;
    return (
      <div>
        <Card className='my-5 p-2 bg-dark'>
          <CardHeader className='bg-dark text-center text-warning d-flex justify-content-between align-items-center'>
            <h1>
              <span>
                <Link to={`/tp/${subject}`}>{subject}</Link>
              </span>
              /{topic}
            </h1>
            <i
              className={
                this.state.collapse === 0
                  ? 'fa fa-minus bg-secondary text-dark rounded p-2'
                  : 'fa fa-plus bg-secondary text-dark rounded p-2'
              }
              style={{ cursor: 'pointer' }}
              onClick={this.toggle}
              data-event={0}
              aria-hidden='true'
            ></i>
          </CardHeader>
          <Collapse isOpen={this.state.collapse === 0}>
            <AddURLSub onAdd={this.onAdd} subject={subject} topic={topic} />
          </Collapse>
          <Bookmarks subject={subject} topic={topic} bm={bookmarks} />
        </Card>
      </div>
    );
  }
}
