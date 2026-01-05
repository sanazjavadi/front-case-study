import type { FC } from "react";
import type { IViewProps } from "./View/view.model";
import type { ActionMenuOption, Item } from "typings/types";

export type ViewComponent = FC<IViewProps>;

export interface IForlderProps {
  data: Item[];
  navTitle: string;
  options?: ActionMenuOption[];
}
