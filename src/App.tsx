import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Pocket3 from './pages/Pocket3'
import Pocket4 from './pages/Pocket4'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pocket3" element={<Pocket3 />} />
      <Route path="/pocket4" element={<Pocket4 />} />
    </Routes>
  )
}
