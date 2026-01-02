import { useMemo } from "react";
import type { Item } from "~/components/Folder/Folder.model";
import { ITEMS_PER_PAGE } from "~/constants/general";

export const useVisibleItems = ({
  data,
  gridPage,
  tablePage,
}: {
  data: Item[];
  gridPage: number;
  tablePage: number;
}) => {
  const grid = useMemo(
    () => data.slice(0, gridPage * ITEMS_PER_PAGE),
    [data, gridPage]
  );

  const table = useMemo(
    () =>
      data.slice((tablePage - 1) * ITEMS_PER_PAGE, tablePage * ITEMS_PER_PAGE),
    [data, tablePage]
  );

  return { grid, table };
};
