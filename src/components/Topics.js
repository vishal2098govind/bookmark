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
} from 'reactstrap';
import { Link } from 'react-router-dom';
import topicsSubTopics from './topicsSubTopics.json';

export default class Topics extends Component {
  render() {
    return (
      <Card className='my-5 p-2 bg-dark'>
        <CardHeader className='bg-dark text-center text-warning'>
          <h1>{this.props.match.params.id}</h1>
        </CardHeader>
        <ListGroup>
          {topicsSubTopics[this.props.match.params.id].map(topic => (
            <ListGroupItem key={topic} className='bg-dark'>
              <Card className='border-dark bg-secondary p-3'>
                <Row className='row align-items-center'>
                  <Col md='8'>
                    <h5 className='text-center'>{topic}</h5>
                  </Col>
                  <CardBody className='col-md-4'>
                    <div className='d-flex justify-content-between align-items-center'>
                      <Button
                        color='dark'
                        className='text-light border-warning'
                      >
                        Notes
                      </Button>
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
              </Card>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Card>
    );
  }
}
