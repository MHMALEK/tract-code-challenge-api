import { Outlet, createRootRoute } from "@tanstack/react-router"
import React, { Suspense } from "react"
import Dashboard from '../pages/Dashboard'
import '../css/style.css';

import NotFound from "../components/Common/NotFound"

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null
    : React.lazy(() =>
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
        })),
      )

export const Route = createRootRoute({
  component: () => (
    <Dashboard/>
  ),
  notFoundComponent: () => <NotFound />,
})
