import { Paper, Stack, Tabs } from "@mantine/core";
import { useState } from "react";
import styles from "./Folder.module.scss";
import { FolderViewType, type IForlderProps } from "./Folder.model";
import { FolderNavigation } from "./FolderNavigation/FolderNavigation";

export const Folder = ({
  data,
  options,
  gridView,
  tableView,
  navTitle,
}: IForlderProps) => {
  const [activeTab, setActiveTab] = useState<FolderViewType>(
    FolderViewType.GRID
  );

  const ViewComponent =
    activeTab === FolderViewType.GRID ? gridView : tableView;

  return (
    <Paper p="md" className={styles["folder"]}>
      <FolderNavigation title={navTitle} />

      <Tabs
        value={activeTab}
        onChange={(tab) => setActiveTab(tab as FolderViewType)}
        className={styles["folder__tabs"]}
      >
        <Tabs.List>
          <Tabs.Tab value="grid">Grid View</Tabs.Tab>
          <Tabs.Tab value="table">Table View</Tabs.Tab>
        </Tabs.List>
      </Tabs>
      <Stack>
        {options?.length ? (
          <ViewComponent items={data} options={options} />
        ) : null}
      </Stack>
    </Paper>
  );
};
