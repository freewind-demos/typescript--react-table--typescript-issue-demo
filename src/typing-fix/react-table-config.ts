import {UseSortByColumnProps} from 'react-table';

declare module 'react-table' {

  interface ColumnInstance<D extends object = {}>
    extends UseSortByColumnProps<D> {
  }
}
