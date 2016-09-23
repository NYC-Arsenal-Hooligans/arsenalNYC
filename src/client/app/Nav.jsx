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
               <li><NavLink to="/logout" >Log Out</NavLink></li>
               <li><NavLink to="/user-profile" >Profile</NavLink></li>
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
              <li><NavLink to="/create-account" >Create Account</NavLink></li>
           </ul>
       </div>

     </nav>
    )

}

}
