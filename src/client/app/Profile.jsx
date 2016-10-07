import React from 'react'
import Features from  './Features.jsx'

// import Dropdown from 'react-dropdown'
// import Select from './Select.jsx'


// const options = [
//   { value: 'one', label: 'One' },
//   { value: 'two', label: 'Two' },
//   {
//    type: 'group', name: 'group1', items: [
//      { value: 'three', label: 'Three' },
//      { value: 'four', label: 'Four' }
//    ]
//   },
//   {
//    type: 'group', name: 'group2', items: [
//      { value: 'five', label: 'Five' },
//      { value: 'six', label: 'Six' }
//    ]
//   }
// ]
// const defaultOption = options[0]

export default class Profile extends React.Component {



  render(){
    return (
      <div>
        <h1 className='heading'>This is the profile page!!</h1>
        <form onSubmit={this.props.onSubmitSearch}>

        </form>
        <Features
        upcomingEvents={this.props.upcomingEvents} />
      </div>
      )
  }
}

  // <select className="input-group" >
  //           {this.props.upcomingEvents.map((event,i)=>{
  //             return (
  //               <option key={i} value={event.name}>{event.name} - {event.date}</option>
  //               )
  //           })}
  //         </select>
