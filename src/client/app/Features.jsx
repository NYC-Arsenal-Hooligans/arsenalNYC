import React from 'react'

const GBP = '£'

export default class Features extends React.Component {
  render(){
    return(
      <div>
        {this.props.upcomingEvents.map((event, i )=> {
          return (
            <div className='events' key={i}>
              <img src="http://www.gannett-cdn.com/-mm-/79b2fd7723c3ff95564752e57e0dc7899fad847b/c=82-0-1501-1067/local/-/media/2016/08/10/CarolinaGroup/Asheville/636064324453216301-soccer.jpg" alt=""/>
              <div>
                <h3>{event.name}</h3>
                <p>{event.description}</p>
                <p>{GBP}{event.cost}</p>
              </div>
            </div>
            )
        })}
      </div>
      )
  }
}
