import React from 'react';

export default class Navigation extends React.Component{
    render() {
        return (
            <div id='nav'> 
            <nav className='navbar navbar-expand-lg'>
            <ul className='navbar-nav'>
                <li className='nav-item active'>
                    <a className='nav-link' href='#'>Home</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='#'>About</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='#'>Contact</a>
                </li>
            </ul>
        </nav>
        </div>
       ) 
    }
}
        