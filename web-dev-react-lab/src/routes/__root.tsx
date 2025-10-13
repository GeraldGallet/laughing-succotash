import { createRootRoute, Outlet } from "@tanstack/react-router"
import { Layout } from "../Layout"

const RootLayout = () => {
  return <Layout><Outlet /></Layout>
}

export const Route = createRootRoute({ component: RootLayout })
