import React from 'react';

import Table from '../../../../components/Table';

import DateCell from '../Cells/DateCell';
import CampaignCell from '../Cells/CampaignCell';
import ViewCell from '../Cells/ViewCell';
import ActionsCell from '../Cells/ActionsCell';

const columns = [
  {
    header: 'Date',
    cell: (cellData) => <DateCell date={cellData?.createdOn} />
  },
  {
    header: 'Campaign',
    cell: (cellData) => <CampaignCell name={cellData?.name} region={cellData?.region} />
  },
  {
    header: 'View',
    cell: (cellData) => <ViewCell data={cellData} />
  },
  {
    header: 'Actions',
    cell: () => <ActionsCell />
  }
]

const MainTable = ({ data }) => (
  <Table data={data} columns={columns} />
)

export default MainTable;