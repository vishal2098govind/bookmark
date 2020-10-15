import React, { Component } from 'react';
import { Button, FormGroup, Input, Form } from 'reactstrap';
import setBookmarkDB from '../utils/setBookmarkDB';
import { Link } from 'react-router-dom';

export default class AddURLSub extends Component {
  state = {
    subTopic: '',
    url: '',
  };

  render() {
    return (
      <div className='px-5'>
        <Form>
          <FormGroup>
            <Input
              value={this.state.subTopic}
              className='bg-dark text-light'
              onChange={e => this.setState({ subTopic: e.target.value })}
              placeholder='Enter Subtopic'
            />
          </FormGroup>
          <FormGroup>
            <Input
              value={this.state.url}
              onChange={e => this.setState({ url: e.target.value })}
              placeholder='Paste URL'
            />
          </FormGroup>
          <Link
            to={
              window.location.pathname.search('/subtp') === -1
                ? window.location.pathname + '/subtp/' + this.props.topic
                : window.location.pathname
            }
          >
            <Button
              onClick={() => {
                this.setState({ subTopic: '', url: '' });
                setBookmarkDB(
                  this.state.url,
                  this.props.subject,
                  this.props.topic,
                  this.state.subTopic
                );
                this.props.onAdd();
              }}
              color='dark'
              className='text-light'
            >
              Add
            </Button>
          </Link>
        </Form>
      </div>
    );
  }
}
