import type { ActionMenuOption, Item } from "typings/types";

export const FAVORITES_OPTIONS: ActionMenuOption[] = [
  {
    id: "remove-from-favorites",
    label: "Remove from Favorites",
    onClick(item: Item) {
      alert(`${item.name} removed from Favorites`);
    },
  },
  {
    id: "open-item",
    label: "Open item location",
    onClick() {
      alert("Opened");
    },
  },
  {
    id: "share",
    label: "Share",
    onClick() {
      alert("Shared");
    },
  },
  {
    id: "delete",
    label: "Delete",
    onClick(item: Item) {
      alert(`${item.name} deleted`);
    },
  },
];

export const HOME_OPTIONS: ActionMenuOption[] = [
  {
    id: "add-to-favorites",
    label: "Mark as Favorite",
    onClick() {
      alert("Marked as Favorite");
    },
  },
  {
    id: "share",
    label: "Share",
    onClick() {
      alert("Shared");
    },
  },
  {
    id: "delete",
    label: "Delete",
    onClick() {
      alert("Deleted");
    },
  },
];
