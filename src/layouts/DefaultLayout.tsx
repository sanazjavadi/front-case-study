import { Outlet, useNavigate } from "react-router-dom";
import styles from "./Layout.module.scss";
import { Sidebar } from "./Sidebar";
import ErrorBoundary from "~/components/ErrorBoundary";

export const DefaultLayout = () => {
  const navigate = useNavigate();
  return (
    <ErrorBoundary navigate={navigate}>
      <div className={styles["default-layout"]}>
        <Sidebar />
        <main className={styles["default-layout__content"]}>
          <Outlet />
        </main>
      </div>
    </ErrorBoundary>
  );
};
