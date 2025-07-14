// about.tsx
import { createFileRoute } from '@tanstack/react-router'

function About() {
  return <h1>About Page</h1>
}

export const Route = createFileRoute('/about')({ component: About })
