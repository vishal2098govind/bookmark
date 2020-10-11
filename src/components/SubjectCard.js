import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class SubjectCard extends Component {
  render() {
    return (
        <div className="card m-2" style={{width: '18rem'}}>
        {/* <img className="card-img-top" src="/" alt="Card image cap" /> */}
        <div className="card-body">
          <h5 className="card-title">{this.props.subject}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to={`/sub/${this.props.subject}`}>
            <button className='btn btn-warning'>
              SubTopics
            </button> 
          </Link>
          <button className='btn btn-success ml-3'>
            <a className='card-link text-white' href={`https://pyq.ravindrababuravula.com/subject/?cs=${this.props.subject}`}>PYQ</a>
          </button>
        </div>
      </div>
    )
  }
}
