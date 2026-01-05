import { Paper, Stack, Tabs } from "@mantine/core";
import { lazy, Suspense, useEffect, useState } from "react";
import styles from "./Folder.module.scss";
import { type IForlderProps } from "./Folder.model";
import { FolderNavigation } from "./FolderNavigation/FolderNavigation";
import { useSearchParams } from "react-router-dom";
import { VIEW_QUERY } from "~/constants";
import { FolderViewType } from "typings/types";
import { Spinner } from "~/components";

const LazyGridView = lazy(() =>
  import("./View").then((module) => ({ default: module.GridView }))
);

const LazyTableView = lazy(() =>
  import("./View/").then((module) => ({ default: module.TableView }))
);

export const Folder = ({ data, options, navTitle }: IForlderProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

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
            {activeTab === FolderViewType.GRID ? (
              <LazyGridView items={data} options={options} />
            ) : (
              <LazyTableView items={data} options={options} />
            )}
          </Suspense>
        )}
      </Stack>
    </Paper>
  );
};
