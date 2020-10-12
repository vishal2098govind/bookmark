import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  CustomInput,
  Label,
} from 'reactstrap';

import { Link } from 'react-router-dom';

import { subs } from './Subject';

import topicsSubTopics from './topicsSubTopics.json';

class AddURL extends React.Component {
  state = {
    modal: false,
    url: '', // Question URL
    Subject: '', // CO
    topic: '', // Cache
    subTopic: '', // Direct Mapping
  };

  topics = topicsSubTopics[subs[0]];
  onChooseSubject = e => {
    this.setState({ Subject: e.target.value });
    this.topics = topicsSubTopics[e.target.value];
  };

  onBookmarkSubmit = () => {
    this.props.onBookmarkSubmit(
      this.state.url,
      this.state.Subject,
      this.state.topic,
      this.state.subTopic
    );
    this.toggle();
  };

  toggle = () => this.setState({ modal: !this.state.modal });

  render() {
    return (
      <div>
        <Button
          color='dark'
          onClick={this.toggle}
          className='border-warning text-warning'
        >
          Add URL
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add URL</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for='exampleCustomSelect'>
                  <h6>Choose Subject</h6>
                </Label>
                <CustomInput
                  type='select'
                  id='exampleCustomSelect'
                  name='customSelect'
                  onChange={this.onChooseSubject}
                >
                  <option value=''>Select</option>
                  {subs.map(sub => (
                    <option key={sub}>{sub}</option>
                  ))}
                </CustomInput>
              </FormGroup>
              <FormGroup>
                <Label for='exampleCustomSelect'>
                  <h6>Choose Topic</h6>
                </Label>
                <CustomInput
                  type='select'
                  id='exampleCustomSelect'
                  name='customSelect'
                  onChange={e => this.setState({ topic: e.target.value })}
                >
                  <option value=''>Select</option>
                  {this.topics.map(tp => (
                    <option key={tp}>{tp}</option>
                  ))}
                </CustomInput>
              </FormGroup>
              <FormGroup>
                <Input
                  onChange={e => this.setState({ subTopic: e.target.value })}
                  placeholder='Enter Subtopic'
                />
              </FormGroup>
              <FormGroup>
                <Input
                  onChange={e => this.setState({ url: e.target.value })}
                  placeholder='Paste URL'
                />
              </FormGroup>
              <Link to={`/tp/${this.state.Subject}/subtp/${this.state.topic}`}>
                <Button
                  onClick={this.onBookmarkSubmit}
                  color='dark'
                  className='text-success'
                >
                  Submit
                </Button>
              </Link>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button
              color='dark'
              className='text-warning border-warning'
              onClick={this.toggle}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddURL;
