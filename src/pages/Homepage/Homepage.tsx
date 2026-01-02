import { Box } from "@mantine/core";
import { log } from "console";
import { Folder, Spinner, GridView, TableView, EmptyState } from "~/components";
import { HOME_OPTIONS, ITEMS_ENDPOINT } from "~/constants";
import { useFolderPage } from "~/hooks";

export const Homepage = () => {
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
  } = useFolderPage(ITEMS_ENDPOINT);

  if (loading) return <Spinner />;
  if (data.length === 0) return <EmptyState />;

  return (
    <>
      <Folder
        navTitle="Homepage"
        data={{
          grid: visibleGridData,
          table: visibleTableData,
        }}
        gridView={GridView}
        tableView={TableView}
        options={HOME_OPTIONS}
        onTablePageChange={onTablePageChange}
        tablePage={tablePage}
        tableTotalPages={tableTotalPages}
      />
      <Box ref={loadMoreRef} h={1} />
      {gridLoading && isGridView && <Spinner />}
    </>
  );
};
