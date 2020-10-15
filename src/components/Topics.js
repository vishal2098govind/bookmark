import React, { Component } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Button,
  Collapse,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import AddURLSub from './AddURLSub';
import topicsSubTopics from './topicsSubTopics.json';

export default class Topics extends Component {
  state = {
    collapse: -1,
  };
  onAdd = () => this.setState({ collapse: -1 });

  toggle = e => {
    let event = e.target.dataset.event;
    this.setState({
      collapse: this.state.collapse === Number(event) ? -1 : Number(event),
    });
  };

  render() {
    return (
      <Card className='my-5 p-2 bg-dark'>
        <CardHeader className='bg-dark text-center text-warning'>
          <h1>{this.props.match.params.id}</h1>
        </CardHeader>
        <ListGroup>
          {topicsSubTopics[this.props.match.params.id].map((topic, index) => (
            <ListGroupItem key={topic} className='bg-dark'>
              <Card className='border-dark bg-secondary p-3'>
                <Row className='row align-items-center'>
                  <Col md='6'>
                    <h5 className='text-center'>{topic}</h5>
                  </Col>
                  <CardBody className='col-md-6'>
                    <div className='d-flex justify-content-between align-items-center'>
                      <Button
                        color='dark'
                        className='text-light border-warning'
                      >
                        Notes
                      </Button>
                      <i
                        className={
                          this.state.collapse === index
                            ? 'fa fa-minus bg-dark text-white rounded p-2'
                            : 'fa fa-plus bg-dark text-white rounded p-2'
                        }
                        style={{ cursor: 'pointer' }}
                        onClick={this.toggle}
                        data-event={index}
                        aria-hidden='true'
                      ></i>
                      <Link
                        to={`/tp/${this.props.match.params.id}/subtp/${topic}`}
                      >
                        <Button
                          color='dark'
                          className='text-warning border-warning'
                        >
                          Bookmarks
                        </Button>
                      </Link>
                    </div>
                  </CardBody>
                </Row>
                <Collapse isOpen={this.state.collapse === index}>
                  <AddURLSub
                    onAdd={this.onAdd}
                    subject={this.props.match.params.id}
                    topic={topic}
                  />
                </Collapse>
              </Card>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Card>
    );
  }
}
