import React, { useMemo } from 'react';
import moment from 'moment';

import './datecell.scss';

const DateCell = ({ date }) => {
  const dateStamp = useMemo(() => moment(date).format('MMM YYYY, DD'), [date]);
  const dateDiff = useMemo(
    () => moment.duration(moment(date).diff(moment(), 'days'), 'days').humanize(true), 
  [date]);
  return (
    <div className="date-cell">
      <span className="date-stamp">{dateStamp}</span>
      <span className="date-diff">{dateDiff}</span>
    </div>
  )
}

export default DateCell;
