import React from 'react';

export default class LoginForm extends React.Component{
    render() {
        return (
            <div className='container'> 
            <h3>Log In</h3>
            <form> 
            <div className='form-group'>
                <label for='userName'>User Name</label>
                <input type='text' className='form-control' id='userName' placeholder='Enter User Name'></input>
            </div>
            <div className='form-group'>
                <label for='password'>Password</label>
                <input type='text' className='form-control' id='password' placeholder='Enter Password'></input>
            </div>
            </form> 
            </div>
        ) 
            
        
    }
}