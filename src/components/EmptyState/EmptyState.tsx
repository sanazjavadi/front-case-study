import { Text } from "@mantine/core";
import styles from "./EmptyState.module.scss";
import type { IEmptyStateProps } from "./EmptyState.model";

export const EmptyState = ({ message = "" }: IEmptyStateProps) => {
  const emptyStateMessage = message ?? "No items found";
  return (
    <div className={styles.emptyState}>
      <Text>{emptyStateMessage}</Text>;
    </div>
  );
};
