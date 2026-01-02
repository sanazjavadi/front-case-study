import { useState } from "react";
import { Paper, Stack, Drawer, ActionIcon } from "@mantine/core";
import { IconMenu2 } from "@tabler/icons-react";
import styles from "./Layout.module.scss";
import { NavButtons } from "./NavButtons";

export const Sidebar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <Paper withBorder className={styles["default-layout__sidebar"]}>
        <Stack>
          <NavButtons />
        </Stack>
      </Paper>

      <div className={styles["hamburger-button"]}>
        <ActionIcon size="lg" onClick={() => setIsDrawerOpen(true)}>
          <IconMenu2 size={24} />
        </ActionIcon>
      </div>

      <Drawer
        opened={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        padding="md"
        size="xs"
      >
        <Stack>
          <NavButtons fullWidth onItemClick={() => setIsDrawerOpen(false)} />
        </Stack>
      </Drawer>
    </>
  );
};
