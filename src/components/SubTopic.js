import React, { Component } from 'react';
import topics from './topicsSubTopics.json';
import { subs } from './Subject';

const Topics = subs.map(sub => ({ sub, topics: topics[sub] }));

export default class SubTopic extends Component {
  state = {
    Subject: null,
    Topic: null,
    bookmarks: [],
  };

  componentDidMount = () => {
    console.log(Topics);
  };

  render() {
    return <div>Topic</div>;
  }
}
