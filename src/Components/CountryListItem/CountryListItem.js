import React from 'react';
import './CountryListItem.css';

const CountryListItem = props => {
  return (
    <li className='CountryListItem' onClick={props.onClick}>
      {props.name}
    </li>
  );
};

export default CountryListItem;