import { Folder, EmptyState } from "~/components";
import { ITEMS_ENDPOINT } from "~/constants";
import { createHomeOptions } from "~/constants";
import { useMemo } from "react";
import { useItemActions } from "~/hooks";
import { useFetchItems } from "~/hooks";

export const Homepage = () => {
  const { data, loading } = useFetchItems(ITEMS_ENDPOINT);
  const { onToggleFavorite, onDelete, onShare } = useItemActions();

  const options = useMemo(
    () => createHomeOptions(onToggleFavorite, onDelete, onShare),
    [onToggleFavorite, onDelete, onShare]
  );

  if (data.length === 0 && !loading) return <EmptyState />;

  return <Folder navTitle="Homepage" data={data} options={options} />;
};
