import React from "react";

import "./app.css";
import Header from "../header";
// import ItemList from '../item-list'
// import PersonDetails from '../person-details'
import RandomPlanet from "../random-planet";
import ErrorButton from "../error-button";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";


import { SwapiServiceProvider } from "../swapi-service-context/swapi-service-context";
import DummySwapiService from "../../services/dummy-swapi-service";
import { PeoplePage, PlanetPage, StarshipPage } from "../pages";

export default class App extends React.Component {
  state = {
    showRandomPlanet: true,
    hasError: false,
    swapiService: new SwapiService(),
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
        console.log('Switched to', Service.name);

        return {
            swapiService: new Service()
        }
    });
  };

  onPersonSelected = (id) => {
    console.log("person selected", id);
    this.setState({
      selectedPerson: id,
    });
  };

  render() {

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <div className="stardb-app">
            <Header onServiceChange={this.onServiceChange} />
            <RandomPlanet />
            <ErrorButton />

            <PeoplePage />

            <PlanetPage />

            <StarshipPage />
            
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
