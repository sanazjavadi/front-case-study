import { ActionIcon, Paper, Text } from "@mantine/core";
import { IconDots } from "@tabler/icons-react";
import { useState } from "react";
import styles from "./FolderAction.module.scss";
import type { FolderActionsProps } from "./FolderActions.model";
import { useClickOutside } from "@mantine/hooks";

export const FolderActions = ({ options, item }: FolderActionsProps) => {
  const [isOpen, setOpened] = useState(false);
  const ref = useClickOutside(() => setOpened(false));

  const handleToggleOpenState = () => setOpened(!isOpen);

  return (
    <div ref={ref} className={styles["folder-actions"]}>
      <ActionIcon variant="transparent" onClick={handleToggleOpenState}>
        <IconDots size={24} />
      </ActionIcon>

      {isOpen ? (
        <Paper
          withBorder
          shadow="md"
          p="xs"
          className={styles["folder-actions__items"]}
        >
          {options.map((option) => {
            const handleOptionClick = () => {
              option.onClick(item);
              setOpened(false);
            };

            return (
              <Text
                key={option.id}
                size="sm"
                className={styles["folder-actions__items-text"]}
                onClick={handleOptionClick}
              >
                {option.label}
              </Text>
            );
          })}
        </Paper>
      ) : null}
    </div>
  );
};
