export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return {
    date: date.toLocaleDateString("en-US"),
    time: date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }),
  };
};
