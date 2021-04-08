import React from 'react';

import price from '../../../../../assets/Dashboard/Row/Group 4/Price.png'

import './viewcell.scss';

const ViewCell = ({ data }) => {
  return (
    <div className="view-cell">
      <img className="view-price-image" src={price} alt="price" />
      <span className="view-text">View Pricing</span>
    </div>
  )
}

export default ViewCell;
