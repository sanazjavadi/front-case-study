import type { FC } from "react";
import type { IViewProps } from "./View/view.model";
import type { ActionMenuOption, Item } from "typings/types";
import type { ITableViewProps } from "./View/table/Table.model";

export type ViewComponent = FC<IViewProps>;

export interface IForlderProps {
  data: {
    grid: Item[];
    table: Item[];
  };
  navTitle: string;
  gridView: ViewComponent;
  tableView: ViewComponent;
  options?: ActionMenuOption[];
  tablePagination?: ITableViewProps["pagination"];
}
