import React from 'react';
import { Link } from 'react-router';
import NavLink from './NavLink.jsx'

export default function Nav (props) {

 if(props.userStatus === true){

  return (

    <nav className="navbar navbar-default navbar-fixed-top">
         <div className="container">
           <div className="navbar-header">
             <ul className="nav navbar-nav">
            <li><Link to="/" className="nospace"><span className="logo"></span></Link></li>
          </ul>
            </div>
             <ul className="nav navbar-nav navbar-right">
               <li><NavLink onClick={props.changeStatus} to="/" >Log Out</NavLink></li>
               <li><NavLink to="/profile" >Profile</NavLink></li>
             </ul>
         </div>

       </nav>

    )


 } else {

  return (

     <nav className="navbar navbar-default navbar-fixed-top">
       <div className="container">
         <div className="navbar-header">
          <ul className="nav navbar-nav">
            <li><Link to="/" className="nospace"><span className="logo"></span></Link></li>
          </ul>
          </div>
           <ul className="nav navbar-nav navbar-right">

              <li><NavLink to="/login" >Login</NavLink></li>
              <li><NavLink to="/create-user" >Sign Up</NavLink></li>
              <li><NavLink to="/update-event" >UPDATER</NavLink></li>
           </ul>
       </div>

     </nav>
    )

}

}
