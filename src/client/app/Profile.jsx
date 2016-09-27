import React from 'react'
// import Dropdown from 'react-dropdown'
import Dropdown from './Dropdown.jsx'


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

  handleChange(){

  }

  render(){
    return (
      <div>
        <h1 className='heading'>This is the profile page!!</h1>
        <Dropdown />
        {/*  <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
        <div className="dropdown">
        <div class="btn-group">
          <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
            <span class="caret"></span></button>
            <ul class="dropdown-menu">
              <li><a href="#">HTML</a></li>
              <li><a href="#">CSS</a></li>
              <li><a href="#">JavaScript</a></li>
            </ul>
          </div>
        </div>
         <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown button
        </button>
          <ul className="dropdown-menu">
          {this.props.upcomingEvents.map((event, i) => {
            return (
              <li key={event.id}>{event.name}<br />
              {event.date}<br />
              {event.description}<br />
              {event.cost}</li>
            )
          })}
          </ul>
        </div>*/}
      </div>
      )
  }
}
