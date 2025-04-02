import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import CalendarPage from './pages/CalendarPage'
import "./App.css";
import { client } from './client/client.gen'

client.setConfig({ baseURL: "http://localhost:8000" })

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/login/calendar" element={<CalendarPage />} />
    </Routes>
  )
}
export default App
