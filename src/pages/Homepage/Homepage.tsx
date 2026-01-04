import { Box } from "@mantine/core";
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
    tableTotalPages,
    onTablePageChange,
    gridPage,
    tablePage,
  } = useFolderPage(ITEMS_ENDPOINT);

  if (loading) return <Spinner />;
  if (data.length === 0) return <EmptyState />;

  return (
    <>
      <Folder
        navTitle="Homepage"
        data={data}
        gridView={GridView}
        tableView={TableView}
        options={HOME_OPTIONS}
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
