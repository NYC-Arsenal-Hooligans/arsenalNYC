import React from 'react'
import Features from  './Features.jsx'

export default class Home extends React.Component {
  render(){
    return(
      <div>
        <h1>This is Home</h1>
         <Features
        upcomingEvents={this.props.upcomingEvents} />
      </div>
      )
  }
}
