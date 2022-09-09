import React, { useState } from 'react';
import { MenuItem, FormControl, Select, Button } from '@mui/material';
import usa from './sources/usa';
import uk from './sources/uk';
import './Data.css';

interface Data {
  country: string,
  countryCode: string,
  city: string,
  id: string;
  primary: string;
  longitude: number;
  latitude: number;
  info: string;
  download: string;
  brokenDownload: boolean;
  format: string;
  filename: string;
  email: string;
  contact: string;
  crosswalk: string;
}


interface HeadCell {
  disablePadding: boolean;
  key: keyof Data;
  label: string;
  numeric: boolean;
}

const dataColumns: readonly HeadCell[] = [
  {
  key: 'country', 
  numeric: false,
  disablePadding: false,
  label: 'Country',
  },
  {
  key: 'countryCode', 
  numeric: false,
  disablePadding: false,
  label: 'Country Code',
},
  {
  key: 'city', 
  numeric: false,
  disablePadding: false,
  label: 'City',
},
  {
  key: 'id', 
  numeric: false,
  disablePadding: false,
  label: 'id',
},
{
  key: 'primary', 
    numeric: false,
  disablePadding: false,
  label: 'primary',
},
{
  key: 'longitude', 
  numeric: false,
  disablePadding: false,
  label: 'longitude',
},
{
  key: 'latitude', 
  numeric: false,
  disablePadding: false,
  label: 'latitude',
},
{
  key: 'info', 
    numeric: false,
  disablePadding: false,
  label: 'info',
},
{
  key: 'download', 
    numeric: false,
  disablePadding: false,
  label: 'download',
},
{
  key: 'brokenDownload', 
  numeric: false,
  disablePadding: false,
  label: 'broken',
},
{
  key: 'format', 
    numeric: false,
  disablePadding: false,
  label: 'format',
},
{
  key: 'filename', 
    numeric: false,
  disablePadding: false,
  label: 'filename',
},
{
  key: 'email', 
    numeric: false,
  disablePadding: false,
  label: 'email',
},
{
  key: 'contact', 
    numeric: false,
  disablePadding: false,
  label: 'contact',
},
{
  key: 'crosswalk', 
    numeric: false,
  disablePadding: false,
  label: 'crosswalk',
}
];


const defaultSortColumn = dataColumns[0].key;
const dataSources = [
  {
    name: 'USA',
    data: usa,
    columns: dataColumns.slice(0, 10),
  },
  {
    name: 'UK',
    data: uk,
    columns: dataColumns.slice(0, 10),
  }
];
const dataSourceMenuItems = dataSources.map(({ name }, value) => (
  <MenuItem
    key={name}
    value={value}
  >
    {name}
  </MenuItem>
));

export default function TreeSourceTable() {
  const [selectedSourceIndex, setSelectedSourceIndex] = useState(0);
  const {
    data, columns,
  } = dataSources[selectedSourceIndex];

  const handleChange = (event: any) => {
    setSelectedSourceIndex(event.target.value);
  };

  return (
    <div className="data">
      <div className="data__menus">
        <div className="data__menus-item">
          <FormControl sx={{ minWidth: 200, my: 1 }}>
            <Select
              variant="filled"
              labelId="data__select-label"
              id="data__select"
              size="small"
              value={selectedSourceIndex}
              onChange={handleChange}
              sx={{
                width: 300,
                color: 'primary',
              }}
            >
              {dataSourceMenuItems}
            </Select>
          </FormControl>
        </div>
      <TreeList data={data} columns={columns} />
    </div>
    </div>
  );
}

function TreeList({ data, columns }: any) {
  const [sortOrderAsc, setSortOrderAsc] = useState(true);
  const [lastSortColumn, setLastSortColumn] = useState(defaultSortColumn);
  let sortColumn = lastSortColumn;

  if (!columns.find(({ key }: any) => key === sortColumn)) {
    // The new data doesn't include the last column we sorted on, so default to common/asc and
    // update the state for the next render.
    sortColumn = defaultSortColumn;
    setLastSortColumn(sortColumn);
    setSortOrderAsc(true);
  }

  const sortedTrees = sortTrees(data);

  function sortTrees(trees: any) {
    return [...trees].sort((a, b) => {
      const aa = a[sortColumn].toLowerCase();
      const bb = b[sortColumn].toLowerCase();

      if (aa > bb) return sortOrderAsc ? 1 : -1;
      if (bb > aa) return sortOrderAsc ? -1 : 1;

      return 0;
    });
  }

  const clickHandler = (event: any) => {
    const newColumn = event.target.value;
    let newOrder = !sortOrderAsc;

    if (newColumn !== sortColumn) {
      // Reset the sort order to ascending when the sort column changes.
      newOrder = true;
    }

    setSortOrderAsc(newOrder);
    setLastSortColumn(newColumn);
  };

  return (
    <div className="data__treelist">
      <TreeHeader
        clickHandler={clickHandler}
        columns={columns}
      />
      {sortedTrees.map((tree) => (
        <Tree
          tree={tree}
          columns={columns}
          key={`${tree.common}${tree.scientific}`}
        />
      ))}
    </div>
  );
}

function TreeHeader({ clickHandler, columns }: any) {
  return (
    <div className="data__treelist-tree-header">
      <div className="data__treelist-edit"></div>
      {columns.map(({ key, label }: any) => (
        <div className="data__treelist-tree-header-item" key={key}>
          <button
            type="button"
            className="data__treeheader-btn"
            value={key}
            onClick={clickHandler}
          >
            {label}
          </button>
        </div>
      ))}
    </div>
  );
}

function Tree({ tree, columns }: any) {
  console.log('tree', tree, columns);
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState('edit');
  const onClick = () => {
    setEdit(!edit);
    setEditText(edit ? 'edit' : 'save');
  }
  return (
    <div className="data__treelist-tree" key={tree.common}>
      <div className="data__treelist-edit">
        <Button onClick={onClick} color="info">{editText}</Button>
      </div>

      {columns.map(({ key }: any) => (

        <div className="data__treelist-tree-item" key={key}>
          {edit && <input defaultValue={tree[key]}></input>}
          {!edit && tree[key]}
        </div>
      ))}
    </div>
  );
}
