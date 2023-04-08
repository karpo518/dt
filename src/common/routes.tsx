import React from "react";
import { RouteObject } from "react-router-dom";
import { NotFoundPage } from "../components/pages/error/404/NotFoundPage";
import { UserListPage } from "../components/pages/users/list/UserListPage";
import { UserCreatePage } from "../components/pages/users/create/UserCreatePage";
import App from "../App";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <UserListPage />,
      },
      {
        path: "users/create",
        element: <UserCreatePage />,
      },
    ],
  },
];
