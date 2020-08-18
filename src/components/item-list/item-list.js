import React from 'react'

import './item-list.css'
import Spinner from '../spinner'
import SwapiService from '../../services/swapi-service'
import { withData } from '../hoc-helper'



const ItemList = (props) => {

    const { data, onItemSelected, children: renderLabel } = props

    // console.log(props);

    const items = data.map((item) => {
        const { id } = item
        const label = renderLabel(item)
        return(
            <li className="list-group-item" 
                key={id}
                onClick={() => onItemSelected(id)}>
                {label}
            </li>
        )
    })

    return (
        <ul className='item-list list-group'>
            {items}
        </ul>

    )
}


export default ItemList