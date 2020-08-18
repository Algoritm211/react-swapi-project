import React from 'react'
import { withData, withSwapiService } from '../hoc-helper'
import ItemList from '../item-list'

const withChildFunction = (Wrapped, func) => {
    return (props) => {
        return(
            <Wrapped {...props}>
                {func}
            </Wrapped>
        )
    }
}

const mapPersonMethodsToProps = (swapiService) => {
    return{
        getData: swapiService.getAllPeople
    }
}

const mapPlanetsMethodsToProps = (swapiService) => {
    return{
        getData: swapiService.getAllPlanets
    }
}

const mapStarshipMethodsToProps = (swapiService) => {
    return{
        getData: swapiService.getAllStarships
    }
}

const renderName = ({ name }) => <span>{name}</span>
const renderModelAndName = ({ model, name }) => <span>{name} ({model})</span>

const PersonList = withSwapiService (
    withData(
        withChildFunction(ItemList, renderName)),
        mapPersonMethodsToProps
)

const PlanetList = withSwapiService (
    withData(
        withChildFunction(ItemList, renderName)),
        mapPlanetsMethodsToProps
)


const StarshipList = withSwapiService (
    withData(
        withChildFunction(ItemList, renderModelAndName)),
        mapStarshipMethodsToProps
)

export {
    PersonList,
    PlanetList,
    StarshipList,
}