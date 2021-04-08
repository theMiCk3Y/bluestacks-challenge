import React from 'react';

import file from '../../../../../assets/Dashboard/Row/Group 3/file.png'
import statistics from '../../../../../assets/Dashboard/Row/Group 2/statistics-report.png'
import calendar from '../../../../../assets/Dashboard/Row/Group/calendar.png'

import './actionscell.scss';

const ActionsCell = () => {
  return (
    <div className="actions-cell">
      <div className="action">
        <img className="action-image" src={file} alt="price" />
        <span className="action-text">CSV</span>
      </div>
      <div className="action">
        <img className="action-image" src={statistics} alt="price" />
        <span className="action-text">Report</span>
      </div>
      <div className="action">
        <img className="action-image" src={calendar} alt="price" />
        <span className="action-text">Schedule Again</span>
      </div>
    </div>
  )
}

export default ActionsCell;
