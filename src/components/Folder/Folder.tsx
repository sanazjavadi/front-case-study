import { Paper, Stack, Tabs } from "@mantine/core";
import { useEffect, useState } from "react";
import styles from "./Folder.module.scss";
import { FolderViewType, type IForlderProps } from "./Folder.model";
import { FolderNavigation } from "./FolderNavigation/FolderNavigation";
import { useSearchParams } from "react-router-dom";
import { VIEW_QUERY } from "~/constants/general";

export const Folder = ({
  data,
  options,
  gridView,
  tableView,
  navTitle,
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

      <Stack>
        {options?.length && (
          <ViewComponent
            items={activeTab === FolderViewType.GRID ? data.grid : data.table}
            options={options}
          />
        )}
      </Stack>
    </Paper>
  );
};
