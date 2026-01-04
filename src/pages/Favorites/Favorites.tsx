import { Box } from "@mantine/core";
import { Folder, Spinner, GridView, TableView, EmptyState } from "~/components";
import { FAVORITES_OPTIONS, FOVORITE_ITEMS_ENDPOINT } from "~/constants";
import { useFolderPage } from "~/hooks";

export const Favorites = () => {
  const {
    loading,
    data,
    isGridView,
    gridLoading,
    loadMoreRef,
    gridPage,
    tablePage,
    tableTotalPages,
    onTablePageChange,
  } = useFolderPage(FOVORITE_ITEMS_ENDPOINT);

  if (loading) return <Spinner />;
  if (data.length === 0) return <EmptyState />;

  return (
    <>
      <Folder
        navTitle="Favorites"
        data={data}
        gridPage={gridPage}
        tablePage={tablePage}
        gridView={GridView}
        tableView={TableView}
        options={FAVORITES_OPTIONS}
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
