import React from 'react';
import {
  Card,
  CardHeader,
  Collapse,
  CardBody,
  ListGroup,
  ListGroupItem,
  Form,
  FormGroup,
  Input,
  Button,
  Row,
  Col,
} from 'reactstrap';
import setBookmarkDB from '../utils/setBookmarkDB';
import { Link } from 'react-router-dom';
export default class Bookmarks extends React.Component {
  state = {
    url: '',
    urlCollapse: -1,
  };

  urltoggle = e => {
    console.log(this.state);
    let event = e.target.dataset.event;
    this.setState({
      urlCollapse:
        this.state.urlCollapse === Number(event) ? -1 : Number(event),
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
                className='bg-secondary text-dark text-center'
                style={{ cursor: 'pointer' }}
                onClick={this.urltoggle}
                data-event={index}
              >
                <Row onClick={this.urltoggle} data-event={index}>
                  <Col md='8'>
                    <h5 onClick={this.urltoggle} data-event={index}>
                      {bm.subTopic}
                    </h5>
                  </Col>
                  <Col
                    md='4'
                    className='d-flex justify-content-around align-items-center'
                    onClick={this.urltoggle}
                    data-event={index}
                  >
                    <i
                      className={
                        this.state.urlCollapse === index
                          ? 'fa fa-minus bg-dark text-white rounded p-2'
                          : 'fa fa-plus bg-dark text-white rounded p-2'
                      }
                      style={{ cursor: 'pointer' }}
                      onClick={this.urltoggle}
                      data-event={index}
                      aria-hidden='true'
                    ></i>
                    <i
                      className={
                        this.state.urlCollapse === index
                          ? `fa fa-arrow-up`
                          : 'fa fa-arrow-down'
                      }
                      onClick={this.urltoggle}
                      data-event={index}
                      aria-hidden='true'
                    ></i>
                  </Col>
                </Row>
              </CardHeader>
              <Collapse isOpen={this.state.urlCollapse === index}>
                <Form>
                  <FormGroup>
                    <Input
                      value={this.state.url}
                      onChange={e => this.setState({ url: e.target.value })}
                      placeholder='Paste URL'
                    />
                  </FormGroup>
                  <Link
                    to={`/tp/${this.props.subject}/subtp/${this.props.topic}`}
                  >
                    <Button
                      onClick={() => {
                        this.setState({ url: '' });
                        setBookmarkDB(
                          this.state.url,
                          this.props.subject,
                          this.props.topic,
                          bm.subTopic
                        );
                      }}
                      color='dark'
                      className='text-light'
                    >
                      Add
                    </Button>
                  </Link>
                </Form>
              </Collapse>
              <Collapse isOpen={this.state.urlCollapse === index}>
                <CardBody className='bg-dark border-white'>
                  <ListGroup>
                    {bm.urls.map((url, index) => {
                      return (
                        <ListGroupItem key={index} className='border-dark'>
                          <a href={url} className='text-info'>
                            <h5>
                              {url.substr(url.search('quiz_name') + 10)}{' '}
                              question on {bm.subTopic}
                            </h5>
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
