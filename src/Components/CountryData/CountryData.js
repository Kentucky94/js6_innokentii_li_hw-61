import React, {Component} from 'react';
import './CountryData.css';
import axios from "axios";

class CountryData extends Component {
  state = {
    nextCountryData: [],
  };

  async componentDidUpdate(prevProps, prevState, snapshot) {
    const baseUrl = 'https://restcountries.eu/rest/v2';

    const nextCountryURL = '/name/' + this.props.nextCountry;

    if (this.props.nextCountry && this.props.nextCountry !== prevProps.nextCountry) {
      const newCountry = await axios.get(baseUrl + nextCountryURL);

      const nextCountryData = newCountry.data[0];

      this.setState({nextCountryData});
    }
  }

    render(){
      return (
        <div className='CountryDataContainer'>
          <div className='data'>
            <h2>{this.state.nextCountryData.name}</h2>
            <p><b>capital:</b> {this.state.nextCountryData.capital}</p>
            <p><b>population:</b> {this.state.nextCountryData.population}</p>
          </div>
          <img className='flag' src={this.state.nextCountryData.flag} alt='someImg'/>
        </div>
      );
    }
  }

export default CountryData;