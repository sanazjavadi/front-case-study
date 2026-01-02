import type { FC } from "react";
import type { IViewProps, options } from "./View/view.model";

export enum FolderViewType {
  GRID = "grid",
  TABLE = "table",
}

export enum ItemType {
  FILE = "file",
  FOLDER = "folder",
}

export type Item = {
  id: number;
  name: string;
  type: ItemType;
  createdAt: string;
  updatedAt: string;
};

export type ViewComponent = FC<IViewProps>;

export interface IForlderProps {
  data: {
    grid: Item[];
    table: Item[];
  };
  navTitle: string;
  gridView: ViewComponent;
  tableView: ViewComponent;
  options?: options[];
  tablePage?: number;
  tableTotalPages?: number;
  onTablePageChange?: (page: number) => void;
}
