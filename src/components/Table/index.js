import React, { useMemo } from 'react';

import './table.scss';

const Table = ({ columns, data = [] }) => {
  const headerList = useMemo(() => columns.map((column) => (column?.header || '')), [columns]);

  return (
    <table className="table-component">
      <thead>
        <tr>
          {headerList.map((label) => (<th>{label}</th>))}
        </tr>
      </thead>
      <tbody border={1} frame="void" rules="rows">
        {data.map((cellData) => (
          <tr>
            {columns.map(({cell}) => (<td>{cell ? cell(cellData) : ''}</td>))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table;
