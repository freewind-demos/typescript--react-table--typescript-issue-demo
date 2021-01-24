import React from 'react'

import {useTable, useSortBy} from 'react-table';
import columnsDefs from './columnDefs';
import {data} from './data';

export default function Hello() {

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns: columnsDefs,
    data
  }, useSortBy)

  return <div>
    <h1>Hello React-Table</h1>
    <table {...getTableProps()}>
      <thead>
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            // Notice: without fixing in "typing-fix/react-table-config.ts", we will have typing errors on:
            // 1. column.getSortByToggleProps
            // 2. column.isSorted
            // 3. column.isSortedDesc
            <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
              <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
            </th>
          ))}
        </tr>
      ))}
      </thead>
      <tbody {...getTableBodyProps()}>
      {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        }
      )}
      </tbody>
    </table>
  </div>
};
