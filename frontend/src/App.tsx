import { Routes, Route } from "react-router-dom"
import { MainLayout } from "./components/layout/MainLayout"
import { Login } from "./pages/login"
import { Home } from "./pages/Home"

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route path="/login" element={<Login />} />
    </Routes>
  )
}
