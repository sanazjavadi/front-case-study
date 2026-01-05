import { useEffect, useState } from "react";
import type { Item } from "typings/types";

export const useFetchItems = (endpoint: string) => {
  const [data, setData] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(endpoint);
        if (!res.ok) throw new Error("Failed to fetch items");
        const result = await res.json();
        setData(result.items);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
};
