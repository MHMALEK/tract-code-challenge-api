import { createFileRoute } from "@tanstack/react-router"
import { useQueryClient } from "react-query"

import type { UserOut } from "../../client"

export const Route = createFileRoute("/_layout/")({
  component: Dashboard,
})

function Dashboard() {
  const queryClient = useQueryClient()

  const currentUser = queryClient.getQueryData<UserOut>("currentUser")

  return (
    <div>
      Hi, {currentUser?.full_name || currentUser?.email} 👋🏼
    </div>
  )
}

export default Dashboard
