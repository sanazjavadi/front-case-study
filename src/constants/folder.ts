import type { Item } from "typings/types";

export const createFavoriteOptions = (
  onToggleFavorite: (item: Item, isFavorite: boolean) => void,
  onDelete: (item: Item) => void,
  onShare: (item: Item) => void
) => [
  {
    id: "remove-from-favorites",
    label: "Remove from Favorites",
    onClick: (item: Item) => onToggleFavorite(item, true),
  },
  {
    id: "share",
    label: "Share",
    onClick: onShare,
  },
  {
    id: "delete",
    label: "Delete",
    onClick: onDelete,
  },
];

export const createHomeOptions = (
  onToggleFavorite: (item: Item, isFavorite: boolean) => void,
  onDelete: (item: Item) => void,
  onShare: (item: Item) => void
) => [
  {
    id: "add-to-favorites",
    label: "Mark as Favorite",
    onClick: (item: Item) => onToggleFavorite(item, false),
  },
  {
    id: "share",
    label: "Share",
    onClick: onShare,
  },
  {
    id: "delete",
    label: "Delete",
    onClick: onDelete,
  },
];
