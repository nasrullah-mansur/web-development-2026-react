import { Outlet } from 'react-router'

export default function PublicLayout() {
  return (
    <div>

      <h1 className="text-3xl py-5 text-center">Welcome to our blog</h1>

      <Outlet />

    </div>
  )
}
