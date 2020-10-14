// import React from 'react';
import React from 'react';
import { Card, CardHeader } from 'reactstrap';
import Bookmarks from './Bookmarks';
import { Link } from 'react-router-dom';

export default class SubTopic extends React.Component {
  render() {
    console.log(this.props);
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
          <CardHeader className='bg-dark text-center text-warning'>
            <h1>
              <span>
                <Link to={`/tp/${subject}`}>{subject}</Link>
              </span>
              /{topic}
            </h1>
          </CardHeader>
          <Bookmarks bm={bookmarks} />
        </Card>
      </div>
    );
  }
}
