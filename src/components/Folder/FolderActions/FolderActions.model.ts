import type { Item } from "../Folder.model";
import type { options } from "../View/view.model";

export interface FolderActionsProps {
  item: Item;
  options: options[];
}
