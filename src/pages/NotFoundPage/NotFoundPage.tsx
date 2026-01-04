import { Title, Text, Button, Center, Stack } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import styles from "./NotFoundPage.module.scss";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Center className={styles["not-found__container"]}>
      <Stack className={styles["not-found__stack"]}>
        <Title className={styles["not-found__title-large"]}>404</Title>
        <Title order={3} className={styles["not-found__title-small"]}>
          Oops! Page not found
        </Title>
        <Text className={styles["not-found__text"]}>
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </Text>

        <div className={styles["not-found__buttons"]}>
          <Button size="md" color="blue" onClick={() => navigate("/")}>
            Go Home
          </Button>
          <Button
            size="md"
            variant="outline"
            color="gray"
            onClick={() => navigate("/contact")}
          >
            Contact Support
          </Button>
        </div>
      </Stack>
    </Center>
  );
};
