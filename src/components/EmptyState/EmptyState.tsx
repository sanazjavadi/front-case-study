import { Text } from "@mantine/core";
import styles from "./EmptyState.module.scss";
import type { IEmptyStateProps } from "./EmptyState.model";

export const EmptyState = ({
  message = "No items found",
}: IEmptyStateProps) => {
  return (
    <div className={styles.emptyState}>
      <Text>{message}</Text>;
    </div>
  );
};
