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
import Topics from './Topics.json';

export default class Subject extends Component {
  render() {
    return (
      <Card className='my-5 p-2 bg-dark'>
        <CardHeader className='bg-dark text-center text-warning'>
          <h1>{this.props.match.params.id}</h1>
        </CardHeader>
        <ListGroup>
          {Topics[this.props.match.params.id].map((topic) => (
            <ListGroupItem key={topic}>
              <Card className='border-dark p-3'>
                <Row className='row align-items-center'>
                  <Col md='8'>
                    <h5 className='text-center'>{topic}</h5>
                  </Col>
                  <CardBody className='col-md-4'>
                    <div className='d-flex justify-content-between align-items-center'>
                      <Button
                        color='dark'
                        className='text-warning border-warning'
                      >
                        Notes
                      </Button>
                      <Button
                        color='dark'
                        className='text-warning border-warning'
                      >
                        Bookmarks
                      </Button>
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
