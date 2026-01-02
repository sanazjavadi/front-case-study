import type { FC } from "react";
import type { IViewProps, options } from "./View/view.model";

export type Item = {
  id: number;
  name: string;
  type: string;
  createdAt: string;
  updatedAt: string;
};

export type viewComponent = FC<IViewProps>;

export enum FolderViewType {
  GRID = "grid",
  TABLE = "table",
}

export interface IForlderProps {
  data: Array<Item>;
  navTitle: string;
  gridView: viewComponent;
  tableView: viewComponent;
  options?: options[];
}
