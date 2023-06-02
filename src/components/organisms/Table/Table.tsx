/**
 *
 * Table
 * @format
 *
 */

import Checkbox from '../../atoms/Checkbox';
import Radio from '../../atoms/Radio';
import TableDataCell from '../../atoms/TableDataCell/TableDataCell';
import TableHeaderCell from '../../molecules/TableHeaderCell/TableHeaderCell';
import { IHeaderCellDirection } from '../../molecules/TableHeaderCell/types';
import TableRow from '../../molecules/TableRow/TableRow';
import TableStyled from './styles/table';
import { ColumnActionType, TableColumn, TableProps } from './types';

import { useCallback, useEffect, useState } from 'react';

const Table = ({
  showCaption,
  columns,
  dataSource,
  responsive,
  caption,
}: TableProps) => {
  const [sortBy, setSortBy] = useState<string>();
  const [sortDirection, setSortDirection] = useState<IHeaderCellDirection>(
    IHeaderCellDirection.none
  );
  const [tableDataSource, setDataTableSource] = useState<any[]>([]);
  const [checkedIds, setCheckedIds] = useState<any[]>([]);
  const [radioSelected, setRadioSelected] = useState<any>();

  useEffect(() => {
    setDataTableSource(dataSource);
  }, [dataSource]);

  const handleSort = useCallback(
    (fieldName: string) => {
      const direction = sortDirection === IHeaderCellDirection.descending
          ? IHeaderCellDirection.ascending
          : IHeaderCellDirection.descending;

      const sortData = sortDataSource(tableDataSource, fieldName, direction);
      setDataTableSource(sortData);
      setSortBy(fieldName);
    },
    [tableDataSource, sortDirection]
  );

  const handleCheckbox = useCallback(
    (id: string) => {
      if (checkedIds.includes(id)) {
        const dataId = checkedIds.filter((checkedId) => checkedId !== id);
        setCheckedIds(dataId);
      } else {
        const dataId = [...checkedIds];
        dataId.push(id);
        setCheckedIds(dataId);
      }
    },
    [checkedIds]
  );

  const handleRadio = (value : any) => {
    setRadioSelected(value);
  };

  const getDataRowIsChecked = (id: string) => {
    return checkedIds.includes(id) ? true : false;
  };


  const sortDataSource = (
    datas: any[],
    sortBy: string,
    direction: IHeaderCellDirection
  ) => {
    setSortBy(sortBy);
    setSortDirection(direction);
    return datas.sort((a, b) => {
      if (a[sortBy] < b[sortBy])
        return direction === IHeaderCellDirection.descending ? -1 : 1;
      if (a[sortBy] > b[sortBy])
        return direction === IHeaderCellDirection.ascending ? 1 : -1;
      return 0;
    });
  };

  const renderCell = (
    {
      headerTitle,
      actionType,
      dataField,
      align = 'left',
    }: TableColumn,
    data: any,
    idx: number
  ) => {
    if (actionType === ColumnActionType.checkbox) {
      return (
        <TableDataCell
          key={idx}
          title={headerTitle}
          variant="input"
          align={align}
        >
          <Checkbox
            id={data.id}
            name={dataField}
            value={data.id}
            isChecked={getDataRowIsChecked(data.id)}
            onChange={(_, value) => {
              handleCheckbox(value);
            }}
          />
        </TableDataCell>
      );
    }
    if (actionType === ColumnActionType.radio) {
      return (
        <TableDataCell
          key={idx}
          title={headerTitle}
          variant="input"
          align={align}
        >
          <Radio
            id={data.id}
            name={dataField}
            value={data.id}
            isChecked={radioSelected === data.id}
            onChange={handleRadio}
          />
        </TableDataCell>
      );
    }
    return (
      <TableDataCell
        key={idx}
        title={headerTitle}
        variant={responsive ? 'responsive' : 'default'}
        align={align}
      >
        {data[dataField]}
      </TableDataCell>
    );
  };


  const checkIsHasRadioOrCheckbox = () => {
    const isHasCheckbox = columns.find((column) => column.actionType === ColumnActionType.checkbox);
    if(isHasCheckbox) return ColumnActionType.checkbox;
    const isHasRadio = columns.find((column) => column.actionType === ColumnActionType.radio);
    if(isHasRadio) return ColumnActionType.radio;
    return null;
  };


  return (
    <TableStyled responsive={responsive}>
      {showCaption && caption && <caption>{caption}</caption>}
      {!showCaption && (
        <thead>
          <tr>
            <td />
            {columns.map((column, idx) => (
              <TableHeaderCell
                textAlign={column.align || 'left'}
                key={idx}
                text={column.headerTitle}
                sortable={column.sortable}
                onSort={handleSort}
                sortField={column.dataField}
                direction={sortDirection}
                sortedBy={sortBy}
              />
            ))}
            <td />
          </tr>
        </thead>
      )}
      <tbody>
        {tableDataSource.map((data, index) => (
          <TableRow key={index} selected={checkIsHasRadioOrCheckbox() ? checkIsHasRadioOrCheckbox() === ColumnActionType.checkbox ? getDataRowIsChecked(data.id) : radioSelected === data.id : undefined}>
            <td />
            {columns.map((column, idx) => renderCell(column, data, idx))}
            <td />
          </TableRow>
        ))}
      </tbody>
    </TableStyled>
  );
};

Table.defaultProps = {
  responsive: false,
  showCaption: false,
};

export default Table;
