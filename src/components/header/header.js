import React from 'react'

import './header.css'

const Header = ({ onServiceChange }) => {
    return (
        <div className="header d-flex">
            <h3>Star DB</h3>
            <ul className='d-flex'>
                <li>
                    <a href='bitexpert.io'>People</a>
                </li>
                <li>
                    <a href='bitexpert.io'>Planets</a>
                </li>
                <li>
                    <a href='bitexpert.io'>Starships</a>
                </li>
                <button className='btn btn-primary btn-sm'
                        onClick={onServiceChange}>
                    Change Service
                </button>
            </ul>
        </div>
        
    )
}

export default Header