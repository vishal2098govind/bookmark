import React from 'react';
import {
  Card,
  CardHeader,
  Collapse,
  CardBody,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';

export default class Bookmarks extends React.Component {
  state = {
    collapse: -1,
  };

  toggle = e => {
    let event = e.target.dataset.event;
    this.setState({
      collapse: this.state.collapse === Number(event) ? -1 : Number(event),
    });
  };

  render() {
    const bookmarks = this.props.bm;
    return (
      <div>
        {bookmarks.map((bm, index) => {
          return (
            <Card
              className='p-2 bg-dark'
              style={{ marginBottom: '1rem' }}
              key={index}
            >
              <CardHeader
                className='bg-secondary text-dark d-flex align-items-center justify-content-between'
                style={{ cursor: 'pointer' }}
                onClick={this.toggle}
                data-event={index}
              >
                <h5 onClick={this.toggle} data-event={index}>
                  {bm.subTopic}
                </h5>
                <i
                  className={
                    this.state.collapse === index
                      ? `fa fa-arrow-up`
                      : 'fa fa-arrow-down'
                  }
                  onClick={this.toggle}
                  data-event={index}
                  aria-hidden='true'
                ></i>
              </CardHeader>
              <Collapse isOpen={this.state.collapse === index}>
                <CardBody className='bg-dark border-white'>
                  <ListGroup>
                    {bm.urls.map((url, index) => {
                      return (
                        <ListGroupItem key={index} className='border-dark'>
                          <a href={url} className='text-info'>
                            <h5>{url.substr(url.search('quiz_name') + 10)}</h5>
                          </a>
                        </ListGroupItem>
                      );
                    })}
                  </ListGroup>
                </CardBody>
              </Collapse>
            </Card>
          );
        })}
      </div>
    );
  }
}
