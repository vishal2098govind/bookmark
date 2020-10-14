import React from 'react';
import Bookmark from '../utils/Bookmark';
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
  pathname = window.location.href;
  state = {
    modal: false,
    bookmarkUrl: '', // Question URL
    subject: subs[0], // CO
    topic: topicsSubTopics[subs[0]], // Cache
    subTopic: '', // Direct Mapping
  };

  onChooseSubject = e => {
    this.setState({
      subject: e.target.value,
      topic: topicsSubTopics[e.target.value],
    });
  };

  topicsSelected = this.state.topic[0];

  setBookmarkDB = (url, subject, topic, subtopic) => {
    const db = JSON.parse(localStorage.getItem('db'));

    const sub = db.filter(subj => subj.sub === subject)[0];

    const tp = sub.topics.filter(tp => tp.topic === topic)[0];

    if (tp.bookmarks.length === 0) {
      const bookmark = new Bookmark(subtopic);

      bookmark.add(url);
      tp.bookmarks.push(bookmark);
    } else {
      const sbtp = tp.bookmarks.filter(
        bm => bm.subTopic.toLowerCase() === subtopic.trim().toLowerCase()
      );
      if (sbtp.length === 0) {
        const bookmark = new Bookmark(subtopic);
        bookmark.add(url);
        tp.bookmarks.push(bookmark);
      } else {
        sbtp[0].urls.push(url);
      }
    }

    localStorage.setItem('db', JSON.stringify(db));
    return tp.bookmarks;
  };

  onBookmarkSubmit = () => {
    this.props.onBookmarkSubmit(
      this.state.bookmarkUrl,
      this.state.subTopic,
      this.state.subject,
      this.topicsSelected,
      this.setBookmarkDB(
        this.state.bookmarkUrl,
        this.state.subject,
        this.topicsSelected,
        this.state.subTopic
      )
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
        <Modal
          className='bg-dark p-2'
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalHeader
            className='bg-secondary border-dark text-dark'
            toggle={this.toggle}
          >
            <h4>Add URL</h4>
          </ModalHeader>
          <ModalBody className='bg-secondary text-dark'>
            <Form>
              <FormGroup>
                <Label for='exampleCustomSelect'>
                  <h4>Choose Subject</h4>
                </Label>
                <CustomInput
                  type='select'
                  id='exampleCustomSelect'
                  name='customSelect'
                  onChange={this.onChooseSubject}
                  className='bg-dark text-light'
                  defaultValue={subs[0]}
                >
                  <option value=''>Select</option>
                  {subs.map(sub => (
                    <option key={sub}>{sub}</option>
                  ))}
                </CustomInput>
              </FormGroup>
              <FormGroup>
                <Label for='exampleCustomSelect'>
                  <h4>Choose Topic</h4>
                </Label>
                <CustomInput
                  type='select'
                  className='bg-dark text-white'
                  id='exampleCustomSelect'
                  name='customSelect'
                  onChange={e => (this.topicsSelected = e.target.value)}
                  defaultValue={topicsSubTopics[subs[0]][0]}
                >
                  <option value=''>Select</option>
                  {this.state.topic.map(tp => (
                    <option key={tp}>{tp}</option>
                  ))}
                </CustomInput>
              </FormGroup>
              <FormGroup>
                <Input
                  className='bg-dark text-dark'
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
                  className='text-light'
                >
                  <h4>Submit</h4>
                </Button>
              </Link>
            </Form>
          </ModalBody>
          <ModalFooter className='bg-dark'>
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
