import { useState } from 'react';
import Form from '@/components/form';
import Table from '@/components/table';
import RentRollTabel from './rent-roll-table';
import { columns } from './columns';

export default function RentRollForm({ goNext, goBack }) {
  const titles = [
    { value: 'id', label: 'ID' },
    { value: 'type', label: 'Type' },
    { value: 'rent', label: 'Rent' },
    { value: 'width', label: 'Width (ft)' },
    { value: 'length', label: 'Length (ft)' },
    { value: 'marketRent', label: 'Market Rent' },
    { value: 'status', label: 'Status' },
    { value: 'sqft', label: 'SQFT/SQM' },
  ];
  const rows = [
    {
      id: 'E22',
      type: 'Indoor',
      rent: '$160',
      width: '10',
      length: '20',
      marketRent: '',
      status: 'Rented',
      sqft: '50',
    },
    {
      id: 'E22',
      type: 'Indoor',
      rent: '$160',
      width: '10',
      length: '20',
      marketRent: '',
      status: 'Rented',
      sqft: '50',
    },
    {
      id: 'E22',
      type: 'Indoor',
      rent: '$160',
      width: '10',
      length: '20',
      marketRent: '',
      status: 'Rented',
      sqft: '50',
    },
    {
      id: 'E22',
      type: 'Indoor',
      rent: '$160',
      width: '10',
      length: '20',
      marketRent: '',
      status: 'Rented',
      sqft: '50',
    },
    {
      id: 'E22',
      type: 'Indoor',
      rent: '$160',
      width: '10',
      length: '20',
      marketRent: '',
      status: 'Rented',
      sqft: '50',
    },
    {
      id: 'E22',
      type: 'Indoor',
      rent: '$160',
      width: '10',
      length: '20',
      marketRent: '',
      status: 'Rented',
      sqft: '50',
    },
    {
      id: 'E22',
      type: 'Indoor',
      rent: '$160',
      width: '10',
      length: '20',
      marketRent: '',
      status: 'Rented',
      sqft: '50',
    },
    {
      id: 'E22',
      type: 'Indoor',
      rent: '$160',
      width: '10',
      length: '20',
      marketRent: '',
      status: 'Rented',
      sqft: '50',
    },
    {
      id: 'E22',
      type: 'Indoor',
      rent: '$160',
      width: '10',
      length: '20',
      marketRent: '',
      status: 'Rented',
      sqft: '50',
    },
    {
      id: 'E22',
      type: 'Indoor',
      rent: '$160',
      width: '10',
      length: '20',
      marketRent: '',
      status: 'Rented',
      sqft: '50',
    },
    {
      id: 'E22',
      type: 'Indoor',
      rent: '$160',
      width: '10',
      length: '20',
      marketRent: '',
      status: 'Rented',
      sqft: '50',
    },
    {
      id: 'E22',
      type: 'Indoor',
      rent: '$160',
      width: '10',
      length: '20',
      marketRent: '',
      status: 'Rented',
      sqft: '50',
    },
    {
      id: 'E22',
      type: 'Indoor',
      rent: '$160',
      width: '10',
      length: '20',
      marketRent: '',
      status: 'Rented',
      sqft: '50',
    },
    {
      id: 'E22',
      type: 'Indoor',
      rent: '$160',
      width: '10',
      length: '20',
      marketRent: '',
      status: 'Rented',
      sqft: '50',
    },
  ];


  const data = [{

  }];
  return (
    <Form title="Rent roll" goNext={goNext} goBack={goBack}>
      {/* <Table titles={titles} rows={rows} /> */}
      <RentRollTabel columns={columns} data={rows} />
    </Form>
  );
}
