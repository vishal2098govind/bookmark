import React, { Component } from 'react'
import Topics from './Topics.json';



export default class Subject extends Component {
  render() {
    return (
      <div className='mt-5'>
      <h1>{this.props.match.params.id}</h1>
      <div className="card" style={{width: '18rem'}}>
        <ul className="list-group list-group-flush">
            {Topics[this.props.match.params.id].map(topic=><li key={topic} className="list-group-item ">{topic}</li>)}
        </ul>
      </div>
      </div>
    )
  }
}
