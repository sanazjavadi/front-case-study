import { Box } from "@mantine/core";
import { useMemo } from "react";
import { Folder, Spinner, EmptyState } from "~/components";
import { createFavoriteOptions, FOVORITE_ITEMS_ENDPOINT } from "~/constants";
import { useFolderPage } from "~/hooks";
import { useItemActions } from "~/hooks";

export const Favorites = () => {
  const {
    data,
    isGridView,
    gridLoading,
    loadMoreRef,
    gridPage,
    tablePage,
    tableTotalPages,
    onTablePageChange,
    loading,
  } = useFolderPage(FOVORITE_ITEMS_ENDPOINT);

  const { onToggleFavorite, onDelete, onShare } = useItemActions();

  const options = useMemo(
    () => createFavoriteOptions(onToggleFavorite, onDelete, onShare),
    [onToggleFavorite, onDelete, onShare]
  );

  if (data.length === 0 && !loading) return <EmptyState />;

  return (
    <>
      <Folder
        navTitle="Favorites"
        data={data}
        gridPage={gridPage}
        tablePage={tablePage}
        options={options}
        tablePagination={{
          onChange: onTablePageChange,
          page: tablePage,
          totalPages: tableTotalPages,
        }}
      />
      <Box ref={loadMoreRef} h={1} />
      {gridLoading && isGridView && <Spinner />}
    </>
  );
};
