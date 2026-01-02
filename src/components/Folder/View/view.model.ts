import type { Item } from "../Folder.model";

export type options = {
  label: string;
  onClick: (item: Item) => void;
};

export interface IViewProps {
  items: Item[];
  options: options[];
}
