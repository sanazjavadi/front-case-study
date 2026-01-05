import { useMemo } from "react";
import { Folder, EmptyState } from "~/components";
import { createFavoriteOptions, FOVORITE_ITEMS_ENDPOINT } from "~/constants";
import { useFetchItems, useItemActions } from "~/hooks";

export const Favorites = () => {
  const { data, loading } = useFetchItems(FOVORITE_ITEMS_ENDPOINT);

  const { onToggleFavorite, onDelete, onShare } = useItemActions();

  const options = useMemo(
    () => createFavoriteOptions(onToggleFavorite, onDelete, onShare),
    [onToggleFavorite, onDelete, onShare]
  );

  if (data.length === 0 && !loading) return <EmptyState />;

  return (
    <>
      <Folder navTitle="Favorites" data={data} options={options} />
    </>
  );
};
