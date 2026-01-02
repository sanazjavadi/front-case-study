import { useEffect, useState } from "react";
import { Folder } from "~/components";
import { GridView, TableView } from "~/components/Folder/View/";
import { HOME_OPTIONS, ITEMS_ENDPOINT } from "~/constants";

export const Homepage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(ITEMS_ENDPOINT)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setData(result.items);
      });
  }, []);

  return (
    <Folder
      navTitle="Homepage"
      data={data}
      gridView={GridView}
      tableView={TableView}
      options={HOME_OPTIONS}
    />
  );
};
