import React, {Component} from 'react';
import Header from '../header';
import './app.css';
import SwapiService from '../../services/swapi-service'
import ErrorBoundry from '../error-boundry';
import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList
} from '../sw-components';
import { SwapiServiceProvider } from '../swapi-service-context';

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  render() {

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService} >
          <div className="stardb-app">
            <Header />

            <PersonDetails itemId={3} />

            <PlanetDetails itemId={5} />

            <StarshipDetails itemId={9} />

            <PersonList />

            <StarshipList />

            <PlanetList />

          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
