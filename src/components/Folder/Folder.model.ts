import type { FC } from "react";
import type { IViewProps } from "./View/view.model";
import type { ActionMenuOption, Item } from "typings/types";

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
  tablePage?: number;
  tableTotalPages?: number;
  onTablePageChange?: (page: number) => void;
}
