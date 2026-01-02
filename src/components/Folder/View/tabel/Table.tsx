import { Table } from "@mantine/core";
import { FolderActions } from "../../FolderActions/FolderActions";
import type { IViewProps } from "../view.model";
import styles from "./Table.module.scss";
import { formatDate } from "~/utils";

export const TableView = ({ items = [], options }: IViewProps) => {
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
            {items.map((item) => {
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
    </div>
  );
};
