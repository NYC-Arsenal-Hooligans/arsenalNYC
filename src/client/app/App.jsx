import React     from 'react';
import ReactDOM  from 'react-dom'
import Nav       from './Nav.jsx'
import Features  from './Features.jsx'

export default class App extends React.Component {

  constructor() {

    super();

    this.state = {
      userLoggedIn: true,
      events: [],
      listVisible: false
    }
  }

   componentDidMount(){
    firebase.database().ref('events/').on('value', (snapshot)=> {
      const currentevents = snapshot.val()
      if (currentevents != null){
        this.setState({
          events: currentevents
        })
      }
    })
  }

  changeLogInStatus(){
    let userStatus = !this.state.userLoggedIn
    this.setState({
      userLoggedIn: userStatus
    })
    console.log('yas!')
  }

  render() {
    return(
      <container>
        <header>
          <Nav
          userStatus={this.state.userLoggedIn}
          changeStatus={this.changeLogInStatus.bind(this)} />
        </header>
        <div className="container">
          {this.props.children && React.cloneElement(this.props.children, {
            changeStatus:this.changeLogInStatus.bind(this),
            upcomingEvents:this.state.events
            })}
        </div>
        <Features
        upcomingEvents={this.state.events} />
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </container>
      )
  }
}
