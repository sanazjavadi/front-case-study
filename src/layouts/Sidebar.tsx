import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Paper, Stack, Drawer, ActionIcon } from "@mantine/core";
import { IconMenu2 } from "@tabler/icons-react";
import { FAVORITES_PATH, HOME_PATH } from "~/constants";
import styles from "./Layout.module.scss";

export const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [drawerOpened, setDrawerOpened] = useState(false);

  const navItems = [
    { label: "Homepage", path: HOME_PATH },
    { label: "Favorites", path: FAVORITES_PATH },
  ];

  return (
    <>
      <Paper withBorder className={styles["default-layout__sidebar"]}>
        <Stack>
          {navItems.map((item) => (
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

      <ActionIcon
        className={styles["hamburger-button"]}
        size="lg"
        onClick={() => setDrawerOpened(true)}
      >
        <IconMenu2 size={24} />
      </ActionIcon>

      <Drawer
        opened={drawerOpened}
        onClose={() => setDrawerOpened(false)}
        title="Menu"
        padding="md"
        size="xs"
      >
        <Stack>
          {navItems.map((item) => (
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
