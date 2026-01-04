import { Paper, Stack, Tabs } from "@mantine/core";
import { lazy, Suspense, useEffect, useMemo, useState } from "react";
import styles from "./Folder.module.scss";
import { type IForlderProps } from "./Folder.model";
import { FolderNavigation } from "./FolderNavigation/FolderNavigation";
import { useSearchParams } from "react-router-dom";
import { VIEW_QUERY } from "~/constants";
import { FolderViewType } from "typings/types";
import { useVisibleItems } from "~/hooks";
import { Spinner } from "~/components";

const LazyGridView = lazy(() =>
  import("./View").then((module) => ({ default: module.GridView }))
);

const LazyTableView = lazy(() =>
  import("./View/").then((module) => ({ default: module.TableView }))
);

export const Folder = ({
  data,
  options,
  navTitle,
  tablePagination,
  gridPage,
  tablePage,
}: IForlderProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { grid, table } = useVisibleItems({
    data,
    gridPage,
    tablePage,
  });

  const [activeTab, setActiveTab] = useState<FolderViewType>(() => {
    const viewParam = searchParams.get(VIEW_QUERY);
    return viewParam === FolderViewType.TABLE
      ? FolderViewType.TABLE
      : FolderViewType.GRID;
  });

  const handleTabChange = (tab: string) => {
    setActiveTab(tab as FolderViewType);
    setSearchParams({ view: tab });
  };

  const memoizedItems = useMemo(() => {
    return activeTab === FolderViewType.GRID ? grid : table;
  }, [activeTab, grid, table]);

  const ViewComponent =
    activeTab === FolderViewType.GRID ? LazyGridView : LazyTableView;

  useEffect(() => {
    if (!searchParams.get(VIEW_QUERY)) {
      setSearchParams({ view: activeTab });
    }
  }, [activeTab, searchParams, setSearchParams]);

  return (
    <Paper p="md" className={styles["folder"]}>
      <FolderNavigation title={navTitle} />

      <Tabs
        value={activeTab}
        onChange={(tab) => handleTabChange(tab as FolderViewType)}
        className={styles["folder__tabs"]}
      >
        <Tabs.List>
          <Tabs.Tab value={FolderViewType.GRID}>Grid View</Tabs.Tab>
          <Tabs.Tab value={FolderViewType.TABLE}>Table View</Tabs.Tab>
        </Tabs.List>
      </Tabs>

      <Stack className={styles["folder__content"]}>
        {options?.length && (
          <Suspense fallback={<Spinner />}>
            <ViewComponent
              items={memoizedItems}
              options={options}
              {...(activeTab === FolderViewType.TABLE && {
                pagination: tablePagination,
              })}
            />
          </Suspense>
        )}
      </Stack>
    </Paper>
  );
};
