import React, { Component } from 'react';
import AdminEventFeatures from './AdminEventFeatures.jsx';
const firebase = require("firebase");
//only this component cares about the state here, the event
class EventUpdater extends Component {

  constructor(props, context) {
    console.log(props, context)
    super(props, context)
    this.updateEventName = this.updateEventName.bind(this);
    this.submitEvent = this.submitEvent.bind(this);
    this.updateDate = this.updateDate.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.updateCost = this.updateCost.bind(this);
    this.state = {
      events: [],
    }
  }
  //events should be in a redux store
  //called by system not by date. Called when component shows up
  componentDidMount(){
    console.log('componentDidMount')
    //as soon as this component shows up connect to Firebase backend
    //big JSON object, go inside and find 'events' key in object
    //snapshot is firebase object for current value of the key at any
    //given time.

    firebase.database().ref('events/').on('value', (snapshot)=> {
      const currentevents = snapshot.val()
//this function is bound to any change on the backend
      if (currentevents != null){
        this.setState({
          events: currentevents
        })
      }
    })
  }

  updateEventName(event){
    console.log('updateEvent: ' +event.target.value);
    this.setState({
      eventName: event.target.value
    })
  }

  updateDate(event){
    this.setState({
      date: event.target.value
    })

  }

  updateDescription(event){
    this.setState({
      description: event.target.value
    })

  }

    updateCost(event){
    this.setState({
      cost: event.target.value
    })

  }


//binds updateEvent to submit onClick event
  submitEvent(event){
    event.preventDefault();
    console.log('submitEvent: '+this.state.event);
    const nextevent = {
      id: this.state.events.length,
      name: this.state.eventName,
      date: this.state.date,
      description: this.state.description,
      cost: this.state.cost
    }
//when submit event reconnect to firebase, find event key, add another key
//inside, and set our next event as the subindex (events and index key)
    firebase.database().ref('events/'+nextevent.id).set(nextevent);

//pass to firebase backend now, we aren't handling anymore in our state!
    // var list = Object.assign([], this.state.events);
    // list.push(nextevent)
    // this.setState({
    //   events: list
    // })

    document.getElementById("submit-event").reset();
  }

  render(){

    return (

      <div className="row">

      <div className="col-md-2">
      <form id="submit-event">
        <input onChange={this.updateEventName} type="text" placeholder="Event Name" />
        <br />
        <input onChange={this.updateDate} type="date" />
        <br />
        <textarea onChange={this.updateDescription} type="text" placeholder="Event Description"></textarea>
        <br />
        <input onChange={this.updateCost} type="number" placeholder="Event Cost" />
        <br />
        <button onClick={this.submitEvent}>Submit event</button>
        </form>
      </div>
      <div className="col-md-10">
        <AdminEventFeatures upcomingEvents={this.props.upcomingEvents} />
      </div>

      </div>

      )

  }

}

export default EventUpdater;
