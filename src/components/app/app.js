import React from "react";

import "./app.css";
import Header from "../header";
// import ItemList from '../item-list'
// import PersonDetails from '../person-details'
import RandomPlanet from "../random-planet";
import ErrorButton from "../error-button";
import ErrorIndicator from "../error-indicator";
import PeoplePage from "../people-page/people-page";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import Row from "../row";
import ItemDetails, { Record } from "../item-details/item-details";
import ItemList from "../item-list";
import {
  PersonList,
  StarshipList,
  PlanetList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
} from "../sw-components";
import { SwapiServiceProvider } from "../swapi-service-context/swapi-service-context";
import DummySwapiService from "../../services/dummy-swapi-service";

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
    const {
      getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage,
      getAllPeople,
    } = this.state.swapiService;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <div className="stardb-app">
            <Header onServiceChange={this.onServiceChange} />
            <RandomPlanet />
            <ErrorButton />

            <PersonDetails itemId={11} />
            <PlanetDetails itemId={5} />
            <StarshipDetails itemId={2} />

            <PersonList />

            <StarshipList />

            <PlanetList />

            {/* <Row 
                        left={personDetails}
                        right={starshipDetails}
                        /> */}
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
