// __root.tsx
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Box from '../components/Box/Box'
import "../index.css"
import { useLocation } from '@tanstack/react-router'
import GradientBackground from '../components/GradientBackground'

export const Route = createRootRoute({
  component: () => {
    const pathname = useLocation({ select: loc => loc.pathname })
    return (
      <>
       <GradientBackground />
        <Box path={pathname} key={pathname}>
          <Outlet />
        </Box>
        <TanStackRouterDevtools />
      </>
    )
  },
})
