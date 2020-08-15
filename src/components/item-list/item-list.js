import React from 'react'

import './item-list.css'



const ItemList = () => {
    return (
        <ul className='item-list list-group'>
            <li className='list-group-item'>
                Luke
            </li>
            <li className='list-group-item'>
                Vader
            </li>
            <li className='list-group-item'>
                R2-D2
            </li>
        </ul>
    )
}

export default ItemList