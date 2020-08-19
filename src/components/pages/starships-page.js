import React from 'react'
import {StarshipList, StarshipDetails } from '../sw-components'
import Row from '../row'

export default class StarshipPage extends React.Component {

    state = {
        selectedItem: null
    }

    onItemSelected = (selectedItem) => {
        this.setState({
            selectedItem
        })
    }

    render() {
        const { selectedItem } = this.state
        return(
            <Row 
                left={<StarshipList onItemSelected={this.onItemSelected}/>}
                right={<StarshipDetails itemId={selectedItem} />} />
        )
    }
}