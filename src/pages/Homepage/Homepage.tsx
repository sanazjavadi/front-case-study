import { Box } from "@mantine/core";
import { Folder, Spinner, EmptyState } from "~/components";
import { ITEMS_ENDPOINT } from "~/constants";
import { useFolderPage } from "~/hooks";
import { createHomeOptions } from "~/constants";
import { useMemo } from "react";

import { useItemActions } from "~/hooks";

export const Homepage = () => {
  const {
    data,
    loading,
    isGridView,
    gridLoading,
    loadMoreRef,
    tableTotalPages,
    onTablePageChange,
    gridPage,
    tablePage,
  } = useFolderPage(ITEMS_ENDPOINT);

  const { onToggleFavorite, onDelete, onShare } = useItemActions();

  const options = useMemo(
    () => createHomeOptions(onToggleFavorite, onDelete, onShare),
    [onToggleFavorite, onDelete, onShare]
  );

  if (data.length === 0 && !loading) return <EmptyState />;

  return (
    <>
      <Folder
        navTitle="Homepage"
        data={data}
        options={options}
        gridPage={gridPage}
        tablePage={tablePage}
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
