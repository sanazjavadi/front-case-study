import { useCallback } from "react";
import { showNotification } from "@mantine/notifications";
import type { Item } from "typings/types";

export const useItemActions = () => {
  const onToggleFavorite = useCallback((item: Item, isFavorite: boolean) => {
    showNotification({
      message: isFavorite
        ? `${item.name} removed from favorites`
        : `${item.name} marked as favorite`,
      color: isFavorite ? "gray" : "blue",
      autoClose: 1000,
      icon: isFavorite ? "💔" : "⭐",
    });
  }, []);

  const onDelete = useCallback((item: Item) => {
    showNotification({
      message: `${item.name} deleted`,
      color: "red",
    });
  }, []);

  const onShare = useCallback((item: Item) => {
    showNotification({
      message: `${item.name} shared`,
      color: "blue",
    });
  }, []);

  return {
    onToggleFavorite,
    onDelete,
    onShare,
  };
};
