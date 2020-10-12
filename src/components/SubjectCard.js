import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SubjectCard extends Component {
  render() {
    return (
      <div
        className='card border-info bg-light h-100 w-100'
        style={{ width: '18rem' }}
      >
        {/* <img className="card-img-top" src="/" alt="Card image cap" /> */}
        <h5 className='card-header bg-dark text-white'>{this.props.subject}</h5>
        <div className='card-body bg-light'>
          <p className='card-text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to={`/tp/${this.props.subject}`}>
            <button className='btn btn-dark text-white'>SubTopics</button>
          </Link>
          <button className='btn btn-success ml-3'>
            <a
              className='card-link text-light'
              href={`https://pyq.ravindrababuravula.com/subject/?cs=${this.props.subject}`}
            >
              PYQ
            </a>
          </button>
        </div>
      </div>
    );
  }
}
