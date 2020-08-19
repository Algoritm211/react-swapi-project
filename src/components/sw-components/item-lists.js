import React from 'react'
import { withData, withSwapiService, withChildFunction, compose } from '../hoc-helper'
import ItemList from '../item-list'


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

const PersonList = compose(
                    withSwapiService(mapPersonMethodsToProps),
                    withData,
                    withChildFunction(renderName)
                    )(ItemList)

const PlanetList = compose(
                    withSwapiService(mapPlanetsMethodsToProps),
                    withData,
                    withChildFunction(renderName)
                    )(ItemList)


const StarshipList = compose(
                    withSwapiService(mapStarshipMethodsToProps),
                    withData,
                    withChildFunction(renderModelAndName)
                    )(ItemList)


export {
    PersonList,
    PlanetList,
    StarshipList,
}