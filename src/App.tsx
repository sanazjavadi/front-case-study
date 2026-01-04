import { createTheme, MantineProvider } from "@mantine/core";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DefaultLayout } from "./layouts";
import { Favorites, Homepage, NotFoundPage } from "./pages";

import "@mantine/core/styles.css";
import { Notifications } from "@mantine/notifications";

import { FAVORITES_PATH, HOME_PATH } from "./constants";

const theme = createTheme({});

const router = createBrowserRouter([
  {
    path: HOME_PATH,
    element: <DefaultLayout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: FAVORITES_PATH, element: <Favorites /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export const App = () => {
  return (
    <MantineProvider theme={theme}>
      <Notifications />
      <RouterProvider router={router} />
    </MantineProvider>
  );
};
