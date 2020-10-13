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
    bookmarkUrl: '', // Question URL
    subject: this.props.subject, // CO
    topic: topicsSubTopics[this.props.subject], // Cache
    subTopic: '', // Direct Mapping
  };

  onChooseSubject = e => {
    this.setState({
      subject: e.target.value,
      topic: topicsSubTopics[e.target.value],
    });
  };

  topicsSelected = this.state.topic[0];

  onBookmarkSubmit = () => {
    this.props.onBookmarkSubmit({
      url: this.state.bookmarkUrl,
      subject: this.state.subject,
      topic: this.topicsSelected,
      subtopic: this.state.subTopic,
    });
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
                  defaultValue={this.props.subject}
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
                  onChange={e => (this.topicsSelected = e.target.value)}
                  defaultValue={this.props.topic}
                >
                  <option value=''>Select</option>
                  {topicsSubTopics[this.props.subject].map(tp => (
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
                  onChange={e => this.setState({ bookmarkUrl: e.target.value })}
                  placeholder='Paste URL'
                />
              </FormGroup>
              <Link
                to={`/tp/${this.state.subject}/subtp/${this.topicsSelected}`}
              >
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
