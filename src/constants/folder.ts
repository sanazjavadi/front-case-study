export const FAVORITES_OPTIONS = [
  {
    label: "Remove from Favorites",
    onClick(item: any) {
      alert(`${item.name} removed from Favorites`);
    },
  },
  {
    label: "Open item location",
    onClick() {
      alert("Opened");
    },
  },
  {
    label: "Share",
    onClick() {
      alert("Shared");
    },
  },
  {
    label: "Delete",
    onClick(item: any) {
      alert(`${item.name} deleted`);
    },
  },
];

export const HOME_OPTIONS = [
  {
    label: "Mark as Favorite",
    onClick() {
      alert("Marked as Favorite");
    },
  },
  {
    label: "Share",
    onClick() {
      alert("Shared");
    },
  },
  {
    label: "Delete",
    onClick() {
      alert("Deleted");
    },
  },
];
