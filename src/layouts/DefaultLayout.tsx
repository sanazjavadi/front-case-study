import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";
import { Sidebar } from "./Sidebar";

export const DefaultLayout = () => {
  return (
    <div className={styles["default-layout"]}>
      <Sidebar />
      <main className={styles["default-layout__content"]}>
        <Outlet />
      </main>
    </div>
  );
};
