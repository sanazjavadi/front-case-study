import { Box } from "@mantine/core";
import { Folder, Spinner, EmptyState } from "~/components";
import { HOME_OPTIONS, ITEMS_ENDPOINT } from "~/constants";
import { useFolderPage } from "~/hooks";

export const Homepage = () => {
  const {
    data,
    isGridView,
    gridLoading,
    loadMoreRef,
    tableTotalPages,
    onTablePageChange,
    gridPage,
    tablePage,
  } = useFolderPage(ITEMS_ENDPOINT);

  if (data.length === 0) return <EmptyState />;

  return (
    <>
      <Folder
        navTitle="Homepage"
        data={data}
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
