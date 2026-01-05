import { useState, useMemo, useCallback } from "react";
import {
  GRID_LOAD_DELAY,
  INITIAL_PAGE,
  ITEMS_PER_PAGE_Grid,
} from "~/constants";

export const usePagination = <T>({
  items,
  itemsPerPage = ITEMS_PER_PAGE_Grid,
  initialPage = INITIAL_PAGE,
  infiniteScroll = false,
}: {
  items: T[];
  itemsPerPage?: number;
  initialPage?: number;
  infiniteScroll?: boolean;
}) => {
  const [page, setPage] = useState(initialPage);
  const [loading, setLoading] = useState(false);

  const totalPages = useMemo(
    () => Math.ceil(items.length / itemsPerPage),
    [items.length, itemsPerPage]
  );

  const visibleItems = infiniteScroll
    ? items.slice(0, page * itemsPerPage) // Grid
    : items.slice((page - 1) * itemsPerPage, page * itemsPerPage); // Table

  const goToNextPage = useCallback(() => {
    if (page * itemsPerPage >= items.length) return;

    if (infiniteScroll) {
      setLoading(true);
      setTimeout(() => {
        setPage((prev) => prev + 1);
        setLoading(false);
      }, GRID_LOAD_DELAY);
    } else {
      setPage((prev) => Math.min(prev + 1, totalPages));
    }
  }, [page, items.length, itemsPerPage, infiniteScroll, totalPages]);

  const goToPage = useCallback(
    (p: number) => {
      setPage(Math.min(Math.max(p, 1), totalPages));
    },
    [totalPages]
  );

  const resetPage = useCallback(() => setPage(initialPage), [initialPage]);

  return {
    page,
    totalPages,
    visibleItems,
    goToNextPage,
    goToPage,
    resetPage,
    loading,
  };
};
