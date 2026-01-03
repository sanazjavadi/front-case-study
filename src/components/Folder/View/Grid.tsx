import { Card, Text, SimpleGrid, Group, Badge } from "@mantine/core";
import { FolderActions } from "../FolderActions/FolderActions";
import type { IViewProps } from "./view.model";
import { ItemType } from "typings/types";
import { formatDate } from "~/utils";

export const GridView = ({ items, options }: IViewProps) => {
  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, md: 3, lg: 4 }}
      spacing="lg"
      verticalSpacing="lg"
    >
      {items?.map((item) => {
        const badgeColor = item.type === ItemType.FOLDER ? "blue" : "gray";

        return (
          <Card
            key={item.id}
            shadow="sm"
            radius="md"
            padding="lg"
            withBorder
            style={{ overflow: "visible" }}
          >
            <Group justify="space-between" mb="xs">
              <Group gap="xs">
                <Text fw={600}>{item.name}</Text>

                <Badge color={badgeColor} variant="light" radius="sm">
                  {item.type}
                </Badge>
              </Group>

              <FolderActions item={item} options={options} />
            </Group>

            <Text size="sm" c="dimmed">
              Created: {new Date(item.createdAt).toLocaleDateString("en-US")} at{" "}
              {new Date(item.createdAt).toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
            </Text>
            <Text size="sm" c="dimmed">
              Updated: {formatDate(item.updatedAt).date} at{" "}
              {formatDate(item.updatedAt).time}
            </Text>
          </Card>
        );
      })}
    </SimpleGrid>
  );
};
