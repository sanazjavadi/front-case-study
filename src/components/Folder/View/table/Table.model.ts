import type { IViewProps } from "../view.model";

export interface ITableViewProps extends IViewProps {
  pagination?: {
    page: number;
    totalPages: number;
    onChange: (page: number) => void;
  };
}
