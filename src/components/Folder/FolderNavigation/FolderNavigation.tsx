import { Breadcrumbs, Anchor } from "@mantine/core";
import styles from "./FolderNavigation.module.scss";
import type { IFolderNavigationProps } from "./FolderNavigation.model";

export const FolderNavigation = ({ title }: IFolderNavigationProps) => {
  return (
    <Breadcrumbs>
      <Anchor underline="never" size="xl" className={styles.nav}>
        {title}
      </Anchor>
    </Breadcrumbs>
  );
};
