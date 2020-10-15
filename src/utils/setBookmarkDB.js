import Bookmark from './Bookmark';

export default (url, subject, topic, subtopic) => {
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
