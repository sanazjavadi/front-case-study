import { Card, Text, SimpleGrid, Badge } from "@mantine/core";
import { FolderActions } from "../../FolderActions/FolderActions";
import type { IViewProps } from "../view.model";
import { formatDate } from "../view.util";
import styles from "./Grid.module.scss";

export const GridView = ({ items = [], options }: IViewProps) => {
  if (items.length === 0) return <Text>No items found</Text>;

  return (
    <SimpleGrid
      spacing="lg"
      verticalSpacing="lg"
      className={styles["grid-wrapper"]}
    >
      {items.map((item) => {
        const created = formatDate(item.createdAt);
        const updated = formatDate(item.updatedAt);

        return (
          <Card
            withBorder
            shadow="sm"
            radius="md"
            padding="lg"
            key={item.id}
            className={styles["grid-wrapper__card"]}
          >
            <div className={styles["grid-wrapper__card-header"]}>
              <div className={styles["grid-wrapper__card-info"]}>
                <Text
                  className={styles["grid-wrapper__item-name"]}
                  lineClamp={1}
                >
                  {item.name}
                </Text>
                <Badge
                  className={styles["grid-wrapper__item-badge"]}
                  color={item.type === "folder" ? "blue" : "gray"}
                  variant="light"
                  radius="sm"
                >
                  {item.type}
                </Badge>
              </div>

              <div className={styles["grid-wrapper__item-actions"]}>
                <FolderActions item={item} options={options} />
              </div>
            </div>

            <Text size="sm" c="dimmed">
              Created: {created.date} at {created.time}
            </Text>
            <Text size="sm" c="dimmed">
              Updated: {updated.date} at {updated.time}
            </Text>
          </Card>
        );
      })}
    </SimpleGrid>
  );
};
