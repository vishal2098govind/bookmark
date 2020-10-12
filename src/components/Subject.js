import React, { Component } from 'react';
import SubjectCard from './SubjectCard';
import '../css/subCard.css';

const subs = [
  'Computer-Networks',
  'Operating-Systems',
  'Database-Management-System',
  'Computer-Organization',
  'Theory-of-Computation',
  'Compiler-Design',
  'Digital-Logic-Design',
  'Data-Structures',
  'Programming',
  'Algorithms',
  'Engineering-Mathematics',
  'Aptitude',
];

class Subject extends Component {
  render() {
    return (
      <div className='subs my-5 subCard'>
        {subs.map(sub => (
          <div key={sub} className='shadow-sm m-2'>
            <SubjectCard subject={sub} />
          </div>
        ))}
      </div>
    );
  }
}

export { Subject, subs };
