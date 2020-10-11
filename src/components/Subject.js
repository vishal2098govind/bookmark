import React, { Component } from 'react'
import Topics from './Topics.json';



export default class Subject extends Component {
  

  render() {
    return (
      <div className='my-5'>
      <div className="card bg-dark p-2">
        <div className='card-header bg-dark text-warning border-warning text-center'><h1>{this.props.match.params.id}</h1></div>
        <ul className="list-group list-group-flush">
            {Topics[this.props.match.params.id].map(topic=><li key={topic} className="list-group-item p-4 px-5">
              <div className='card border-dark p-3'>
                <div className='row align-items-center'>
                  <div className='col-md-8'>
                    <h5 className='text-center'>{topic}</h5>
                  </div>
                  <div className='card-body col-md-4'>
                    <div className='d-flex justify-content-between align-items-center'>                      
                        <button className='btn btn-success text-white'>Notion Links</button>
                        <button className='btn btn-success text-white'>Bookmarks</button>
                      
                    </div>
                  </div>
                </div>
              </div>
            </li>)}
        </ul>
      </div>
      </div>
    )
  }
}
