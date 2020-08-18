import React from "react";

import "./people-page.css";
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import ErrorBoundry from "../error-boundry";


export default class PeoplePage extends React.Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: null,
  };

  onPersonSelected = (id) => {
    console.log("person selected", id);
    this.setState({
      selectedPerson: id,
    });
  };

  render() {

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}>

        {(item) => (
            `${item.name} (${item.birthYear})`
            )}

        </ItemList>
    );

    const personDetails = (
    <ErrorBoundry>
        <ItemDetails itemId={this.state.selectedPerson} />
    </ErrorBoundry>
    );


    return (
          <Row left={itemList} right={personDetails}/>
    );
  }
}
