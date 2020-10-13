import Topic from './Topic';
export default class Subject {
  constructor(sub, topics) {
    this.sub = sub;
    this.topics = topics.map(topic => new Topic(topic, []));
  }
}
