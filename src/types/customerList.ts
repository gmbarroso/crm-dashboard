import { Customer }  from './customer';

export interface CustomerListProps {
  customers: Customer[] | undefined;
  isLoading: boolean;
  isError: boolean;
}