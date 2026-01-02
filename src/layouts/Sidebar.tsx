import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Paper, Stack, Drawer, ActionIcon } from "@mantine/core";
import { IconMenu2 } from "@tabler/icons-react";
import styles from "./Layout.module.scss";
import { NAV_ITEMS } from "~/constants";

export const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [drawerOpened, setDrawerOpened] = useState(false);

  return (
    <>
      <Paper withBorder className={styles["default-layout__sidebar"]}>
        <Stack>
          {NAV_ITEMS.map((item) => (
            <Button
              key={item.path}
              onClick={() => navigate(item.path)}
              variant={location.pathname === item.path ? "filled" : "default"}
            >
              {item.label}
            </Button>
          ))}
        </Stack>
      </Paper>

      <div className={styles["hamburger-button"]}>
        <ActionIcon size="lg" onClick={() => setDrawerOpened(true)}>
          <IconMenu2 size={24} />
        </ActionIcon>
      </div>

      <Drawer
        opened={drawerOpened}
        onClose={() => setDrawerOpened(false)}
        title="Menu"
        padding="md"
        size="xs"
      >
        <Stack>
          {NAV_ITEMS.map((item) => (
            <Button
              key={item.path}
              onClick={() => {
                navigate(item.path);
                setDrawerOpened(false);
              }}
              variant={location.pathname === item.path ? "filled" : "default"}
              fullWidth
            >
              {item.label}
            </Button>
          ))}
        </Stack>
      </Drawer>
    </>
  );
};
