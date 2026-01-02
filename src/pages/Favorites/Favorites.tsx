import { Box } from "@mantine/core";
import { Folder, Spinner } from "~/components";
import { EmptyState } from "~/components/EmptyState/EmptyState";
import { GridView, TableView } from "~/components/Folder/View";
import { FAVORITES_OPTIONS, FOVORITE_ITEMS_ENDPOINT } from "~/constants";
import { useFolderPage } from "~/hooks";

export const Favorites = () => {
  const {
    loading,
    data,
    isGridView,
    gridLoading,
    loadMoreRef,
    visibleGridData,
    visibleTableData,
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
        data={{
          grid: visibleGridData,
          table: visibleTableData,
        }}
        gridView={GridView}
        tableView={TableView}
        options={FAVORITES_OPTIONS}
        onTablePageChange={onTablePageChange}
        tablePage={tablePage}
        tableTotalPages={tableTotalPages}
      />
      <Box ref={loadMoreRef} h={1} />
      {gridLoading && isGridView && <Spinner />}
    </>
  );
};
