import { useRef, useState, useMemo, useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { FolderViewType } from "typings/types";
import { GRID_LOAD_DELAY, ITEMS_PER_PAGE, VIEW_QUERY } from "~/constants";
import { useIntersectionObserver, useFetchItems } from "~/hooks";

export const useFolderPage = (endpoint: string) => {
  const [gridPage, setGridPage] = useState(1);
  const [tablePage, setTablePage] = useState(1);
  const [gridLoading, setGridLoading] = useState(false);
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const [searchParams] = useSearchParams();

  const isGridView = useMemo(() => {
    const view = searchParams.get(VIEW_QUERY);
    return view !== FolderViewType.TABLE;
  }, [searchParams]);

  const { data, loading } = useFetchItems(endpoint);

  const handleTablePageChange = useCallback((page: number) => {
    setTablePage(page);
  }, []);

  const handleLoadMore = useCallback(() => {
    if (!isGridView) return;

    if (gridPage * ITEMS_PER_PAGE < data.length && !gridLoading) {
      setGridLoading(true);
      setTimeout(() => {
        setGridPage((prev) => prev + 1);
        setGridLoading(false);
      }, GRID_LOAD_DELAY);
    }
  }, [isGridView, gridPage, data.length, gridLoading]);

  useIntersectionObserver(loadMoreRef, handleLoadMore, isGridView);

  const tableTotalPages = useMemo(
    () => Math.ceil(data.length / ITEMS_PER_PAGE),
    [data.length]
  );

  useEffect(() => {
    setGridPage(1);
    setTablePage(1);
  }, [isGridView]);

  return {
    loading,
    data,
    isGridView,
    gridLoading,
    loadMoreRef,
    gridPage,
    tablePage,
    tableTotalPages,
    onTablePageChange: handleTablePageChange,
  };
};
