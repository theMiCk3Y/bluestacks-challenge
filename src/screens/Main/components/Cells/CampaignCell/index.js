import React from 'react';

import './campaigncell.scss';

const CampaignCell = ({ name, region }) => {
  return (
    <div className="campaign-cell">
      <div className="campaign-image">
        image
      </div>
      <div className="campaign-details">
        <span className="campaign-name">{name}</span>
        <span className="campaign-region">{region}</span>
      </div>
    </div>
  )
}

export default CampaignCell;
