export interface AppError {
  message: string;
  code?: string | number;
  status?: number;
  details?: unknown;
}

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

export type ActionMenuOption = {
  id: string;
  label: string;
  onClick: (item: Item) => void;
};
