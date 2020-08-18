import React from 'react'
import ItemDetails from '../item-details'
import { Record } from '../item-details/item-details'
import { SwapiServiceConsumer } from '../swapi-service-context/swapi-service-context'
import { withSwapiService } from '../hoc-helper'

const PlanetDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field='population' label='Population'/>
            <Record field='rotationPeriod' label='Rotation Period'/>
            <Record field='diameter' label='Diameter'/>
        </ItemDetails> 
                    
    )
    
}

const mapMethodsToProps = (swapiService) => {
    return{
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImage
    }
}

export default withSwapiService(PlanetDetails, mapMethodsToProps)