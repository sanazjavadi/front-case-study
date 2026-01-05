import { SimpleGrid, Card, Text, Badge, Box } from "@mantine/core";
import { useRef } from "react";
import { FolderActions } from "../../FolderActions/FolderActions";
import styles from "./Grid.module.scss";
import { formatDate } from "~/utils";
import { ItemType } from "typings/types";
import { useIntersectionObserver } from "~/hooks";
import type { IViewProps } from "../view.model";
import { Spinner } from "~/components/Spinner/Spinner";
import { usePagination } from "~/hooks/usePagination";
import { ITEMS_PER_PAGE_Grid } from "~/constants";

export const GridView = ({ items = [], options }: IViewProps) => {
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const { visibleItems, goToNextPage, loading } = usePagination({
    items,
    itemsPerPage: ITEMS_PER_PAGE_Grid,
    infiniteScroll: true,
  });

  useIntersectionObserver(loadMoreRef, goToNextPage, true);
  return (
    <>
      <SimpleGrid
        spacing="lg"
        verticalSpacing="lg"
        className={styles["grid-wrapper"]}
      >
        {visibleItems.map((item) => {
          const created = formatDate(item.createdAt);
          const updated = formatDate(item.updatedAt);
          const badgeColor = item.type === ItemType.FOLDER ? "blue" : "gray";

          return (
            <Card
              key={item.id}
              withBorder
              shadow="sm"
              radius="md"
              padding="lg"
              className={styles["grid-wrapper__card"]}
            >
              <div className={styles["grid-wrapper__card-header"]}>
                <div className={styles["grid-wrapper__card-info"]}>
                  <Text
                    lineClamp={1}
                    className={styles["grid-wrapper__item-name"]}
                  >
                    {item.name}
                  </Text>
                  <Badge
                    className={styles["grid-wrapper__item-badge"]}
                    color={badgeColor}
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

      <Box ref={loadMoreRef} h={1} />
      {loading && <Spinner />}
    </>
  );
};
