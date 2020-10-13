import React from 'react';
import AddURL from './AddURL';
import Bookmark from '../utils/Bookmark';

export default class SubTopic extends React.Component {
  state = {
    bookmarks: JSON.parse(localStorage.getItem('db'))
      .filter(subj => subj.sub === this.props.subject)[0]
      .topics.filter(tp => tp.topic === this.props.topic)[0].bookmarks,
  };

  setBookmarkDB = ({ url, subject, topic, subtopic }) => {
    console.log(subject, topic);

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

  onBookmarkSubmit = bookmark => {
    this.setState({ bookmarks: this.setBookmarkDB(bookmark) });
  };

  render() {
    return (
      <div>
        <AddURL
          onBookmarkSubmit={this.onBookmarkSubmit}
          subject={this.props.subject}
          topic={this.props.topic}
        />
        <ul>
          {this.state.bookmarks.map(bm => {
            return (
              <li key={bm.subTopic}>
                <span>{bm.subTopic}</span>
                {bm.urls.map((url, index) => (
                  <span key={index}>{url}</span>
                ))}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
