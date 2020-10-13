import Subject from './Subject';
import { subs } from '../components/Subject';
import topics from '../components/topicsSubTopics.json';

export default subs.map(sub => new Subject(sub, topics[sub]));
