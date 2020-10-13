addUrl = db => {
  const { subject, topic, bookmarkUrl, subTopic } = this.props;
  if (subject && topic && bookmarkUrl && subTopic) {
    const sub = db.filter(subj => subj.sub === subject)[0];

    const tp = sub.topics.filter(tp => tp.topic === topic)[0];

    if (tp.bookmarks.length === 0) {
      const bookmark = new Bookmark(subTopic);
      bookmark.add(bookmarkUrl);
      tp.bookmarks.push(bookmark);
    } else {
      const sbtp = tp.bookmarks.filter(
        bm => bm.subTopic.toLowerCase() === subTopic.trim().toLowerCase()
      );
      if (sbtp.length === 0) {
        const bookmark = new Bookmark(subTopic);
        bookmark.add(bookmarkUrl);
        tp.bookmarks.push(bookmark);
      } else {
        sbtp[0].urls.push(bookmarkUrl);
      }
    }

    localStorage.setItem('db', JSON.stringify(db));
  }
};

componentDidUpdate = () => {
  let db = localStorage.getItem('db');

  if (db) {
    db = JSON.parse(db);
    this.addUrl(db);
  } else {
    localStorage.setItem('db', JSON.stringify(db));
    this.addUrl(JSON.parse(localStorage.getItem('db')));
  }
  const bookmarks = JSON.parse(localStorage.getItem('db'))
    .filter(sub => sub.sub === this.state.sub)[0]
    .topics.filter(tp => tp.topic === this.state.topic);

  if (this.state.bookmarks.toString() !== bookmarks.toString()) {
    this.setState({ bookmarks });
  }
};

componentDidMount = () => {
  const url = this.props.match.url;
  const subj = url.substr(4, url.search('/subtp/') - 4);
  const topic = this.props.match.params.id;
  const bookmarks = JSON.parse(localStorage.getItem('db'))
    .filter(sub => sub.sub === subj)[0]
    .topics.filter(tp => tp.topic === topic);
  this.setState({ sub: subj, topic, bookmarks });
};
