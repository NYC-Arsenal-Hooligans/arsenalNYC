import React from 'react';
import NavLink from './NavLink.jsx'
import Form from 'react-router-form'


export default class LoginUser extends React.Component{

  handleSubmit(e){
    //e.preventDefault();
    this.props.changeStatus();

    // this.props.router({
    //     pathname: '/user/profile'
    //   })
  }

  render(){
    return (
      <div>
        <section className="col-md-8 col-md-offset-2">
          <Form to='/user/profile' method="POST" onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
              <label type='text'>User Name</label>
              <input className='form-control' type="text" name='username' placeholder="Enter User Name" required/>
            </div>
            <div className='form-group'>
              <label type='text'>Password</label>
              <input type="password" className='form-control' name='password_digest' placeholder="Enter Password" required/>
            </div>
            <button className='btn btn-success' type='submit'>Login</button>
          </Form>
        </section>
      </div>
    )
  }
}

