export default class Bookmark {
  constructor(subTopic) {
    this.subTopic = subTopic;
    this.urls = [];
  }

  add = url => this.urls.push(url);
}
