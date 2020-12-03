import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const practiceLinks = [
  {
    sub: 'Computer-Networks',
    practiceLink:
      'https://drive.google.com/drive/folders/1BT1nA57j12UfUHvXgfw-5gwF5RbFo1AV?usp=sharing',
  },
  {
    sub: 'Operating-Systems',
    practiceLink:
      'https://drive.google.com/drive/folders/18ZsyVW4xo5Py-PPbZK4bUmZSTyZXq7bQ?usp=sharing',
  },
  {
    sub: 'Database-Management-System',
    practiceLink:
      'https://drive.google.com/drive/folders/16EK7SBulrV28yXDMr1-izOU_WZ1e15ak?usp=sharing',
  },
  {
    sub: 'Computer-Organization',
    practiceLink:
      'https://drive.google.com/drive/folders/15dC2JJKDXPZFMlcNv_7f5rzfs1ECc6uf?usp=sharing',
  },
  {
    sub: 'Theory-of-Computation',
    practiceLink:
      'https://drive.google.com/drive/folders/1CavbEazfU3CsWPr8ttFWbqbiAKYsK1jF?usp=sharing',
  },
  {
    sub: 'Compiler-Design',
    practiceLink:
      'https://drive.google.com/drive/folders/1UPtK3Wc_-YZ4TeFC8j4GKF2LiK7JWRcQ?usp=sharing',
  },
  {
    sub: 'Digital-Logic-Design',
    practiceLink:
      'https://drive.google.com/drive/folders/1vExZ1pxPV56NUfa3hnZOlnbp09WiQ8PV?usp=sharing',
  },
  {
    sub: 'Data-Structures',
    practiceLink:
      'https://drive.google.com/drive/folders/18FBelxhLWxQR7qwgYWymanFy-KRuwcOy?usp=sharing',
  },
  {
    sub: 'Programming',
    practiceLink:
      'https://drive.google.com/drive/folders/17m3Epqygg1zg5Qsf4KmtPI28UmmpT-JK?usp=sharing',
  },
  {
    sub: 'Algorithms',
    practiceLink:
      'https://drive.google.com/drive/folders/1737R5rhr1dzfYisqYps8PyEElDp96rMD?usp=sharing',
  },
  {
    sub: 'Engineering-Mathematics',
    practiceLink:
      'https://drive.google.com/drive/folders/18eO4PECHNX14y-RQRkkZ-2FMDkJm4DD9?usp=sharing',
  },
  {
    sub: 'Aptitude',
    practiceLink:
      'https://drive.google.com/drive/folders/19gDc3PcO4Tkd2axjV0xnukmHv_uFE81U?usp=sharing',
  },
];

export default class SubjectCard extends Component {
  render() {
    const { practiceLink } = practiceLinks.find(
      link => link.sub === this.props.subject
    );
    return (
      <div
        className='card p-1 border-info bg-dark h-100 w-100'
        style={{ width: '18rem' }}
      >
        {/* <img className="card-img-top" src="/" alt="Card image cap" /> */}
        <h5 className='card-header bg-dark text-primary'>
          {this.props.subject}
        </h5>
        <div className='card-body bg-light'>
          <p className='card-text text-dark'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to={`/tp/${this.props.subject}`}>
            <button className='btn btn-dark text-white'>SubTopics</button>
          </Link>
          <button className='btn btn-dark border-warning ml-3'>
            <a
              className='card-link text-warning'
              target='_blank'
              rel='noopener noreferrer'
              href={`https://pyq.ravindrababuravula.com/subject/?cs=${this.props.subject}`}
            >
              PYQ
            </a>
          </button>
          <button className='btn btn-dark border-warning ml-3'>
            <a
              className='card-link text-warning'
              target='_blank'
              rel='noopener noreferrer'
              href={practiceLink}
            >
              Practice
            </a>
          </button>
        </div>
      </div>
    );
  }
}
