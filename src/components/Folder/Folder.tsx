import { Paper, Stack, Tabs } from "@mantine/core";
import { useEffect, useMemo, useState } from "react";
import styles from "./Folder.module.scss";
import { type IForlderProps } from "./Folder.model";
import { FolderNavigation } from "./FolderNavigation/FolderNavigation";
import { useSearchParams } from "react-router-dom";
import { VIEW_QUERY } from "~/constants";
import { FolderViewType } from "typings/types";

export const Folder = ({
  data,
  options,
  gridView,
  tableView,
  navTitle,
  tablePagination,
}: IForlderProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialTab =
    searchParams.get(VIEW_QUERY) === FolderViewType.TABLE
      ? FolderViewType.TABLE
      : FolderViewType.GRID;

  const [activeTab, setActiveTab] = useState<FolderViewType>(initialTab);

  const ViewComponent =
    activeTab === FolderViewType.GRID ? gridView : tableView;

  const handleTabChange = (tab: string) => {
    setActiveTab(tab as FolderViewType);
    setSearchParams({ view: tab });
  };

  const memoizedItems = useMemo(() => {
    return activeTab === FolderViewType.GRID ? data.grid : data.table;
  }, [activeTab, data.grid, data.table]);

  useEffect(() => {
    if (!searchParams.get(VIEW_QUERY)) {
      setSearchParams({ view: initialTab });
    }
  }, []);

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
          <ViewComponent
            items={memoizedItems}
            options={options}
            {...(activeTab === FolderViewType.TABLE && {
              pagination: tablePagination,
            })}
          />
        )}
      </Stack>
    </Paper>
  );
};
