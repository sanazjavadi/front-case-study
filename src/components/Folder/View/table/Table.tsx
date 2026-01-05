import { Flex, Pagination, Table } from "@mantine/core";
import { useState, useMemo } from "react";
import { FolderActions } from "../../FolderActions/FolderActions";
import styles from "./Table.module.scss";
import { formatDate } from "~/utils";
import { ITEMS_PER_PAGE } from "~/constants";
import type { ITableViewProps } from "./Table.model";

export const TableView = ({ items = [], options }: ITableViewProps) => {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);

  const visibleItems = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return items.slice(start, end);
  }, [items, page]);

  return (
    <div className={styles["table-wrapper"]}>
      <Table.ScrollContainer minWidth={500} type="native">
        <Table horizontalSpacing="md" verticalSpacing="sm" stickyHeader>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>ID</Table.Th>
              <Table.Th>Name</Table.Th>
              <Table.Th>Type</Table.Th>
              <Table.Th>Created At</Table.Th>
              <Table.Th>Updated At</Table.Th>
              <Table.Th>Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {visibleItems.map((item) => {
              const created = formatDate(item.createdAt);
              const updated = formatDate(item.updatedAt);

              return (
                <Table.Tr key={item.id}>
                  <Table.Td data-label="ID">{item.id}</Table.Td>
                  <Table.Td data-label="Name" title={item.name}>
                    {item.name}
                  </Table.Td>
                  <Table.Td data-label="Type">{item.type}</Table.Td>
                  <Table.Td data-label="Created At">
                    {created.date} at {created.time}
                  </Table.Td>
                  <Table.Td data-label="Updated At">
                    {updated.date} at {updated.time}
                  </Table.Td>
                  <Table.Td data-label="Actions">
                    <FolderActions item={item} options={options} />
                  </Table.Td>
                </Table.Tr>
              );
            })}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>

      {totalPages > 1 && (
        <Flex
          justify="center"
          mt="sm"
          className={styles["table-wrapper__pagination"]}
        >
          <Pagination
            value={page}
            total={totalPages}
            onChange={setPage}
            size="sm"
            radius="md"
          />
        </Flex>
      )}
    </div>
  );
};
