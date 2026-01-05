import { SimpleGrid, Card, Text, Badge, Box } from "@mantine/core";
import { useState, useRef, useCallback } from "react";
import { FolderActions } from "../../FolderActions/FolderActions";
import styles from "./Grid.module.scss";
import { formatDate } from "~/utils";
import { ItemType } from "typings/types";
import { ITEMS_PER_PAGE, GRID_LOAD_DELAY } from "~/constants";
import { useIntersectionObserver } from "~/hooks";
import type { IViewProps } from "../view.model";
import { Spinner } from "~/components/Spinner/Spinner";

export const GridView = ({ items = [], options }: IViewProps) => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const visibleItems = items.slice(0, page * ITEMS_PER_PAGE);

  const handleLoadMore = useCallback(() => {
    if (page * ITEMS_PER_PAGE < items.length && !loading) {
      setLoading(true);
      setTimeout(() => {
        setPage((prev) => prev + 1);
        setLoading(false);
      }, GRID_LOAD_DELAY);
    }
  }, [items.length, page, loading]);

  useIntersectionObserver(loadMoreRef, handleLoadMore, true);

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
