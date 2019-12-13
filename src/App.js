import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import CountryListItem from "./Components/CountryListItem/CountryListItem";
import CountryData from "./Components/CountryData/CountryData";

class App extends Component {
  state = {
    countryNames: [],
    nextCountry: '',
  };

  countryDataHandler = (countryName) => {
    this.setState({nextCountry: countryName});
  };

  async componentDidMount(prevProps, prevState) {
    const baseUrl= 'https://restcountries.eu/rest/v2';

    const allCountriesURL = '/all';

    const response = await axios.get(baseUrl + allCountriesURL);

    const countries = response.data;

    const countryNames = countries.map(country => country.name);

    this.setState({countryNames});
  };

  render() {
    const countryNames = this.state.countryNames.map(countryName => {
      return <CountryListItem
        key = {countryName}
        name = {countryName}
        onClick = {() => this.countryDataHandler(countryName)}
      />
    });

    return (
      <div className='App'>
        <div className="countries-list">
          <ul>
            {countryNames}
          </ul>
        </div>
        <div className="countries-data">
          <CountryData
            nextCountry={this.state.nextCountry}
          />
        </div>
      </div>
    );
  }
}

export default App;