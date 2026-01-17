import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import PublicLayout from './components/PublicLayout'
import AdminLayout from './components/AdminLayout'
import Home from './pages/Home'
import Report from './pages/Report'
import Hotspots from './pages/Hotspots'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import Analytics from './pages/Analytics'
import SmartCamera from './pages/SmartCamera'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path='report' element={<Report />} />
          <Route path='hotspots' element={<Hotspots />} />
        </Route>

        <Route path='/admin' element={<AdminLogin />} />

        <Route path='/admin' element={<AdminLayout />}>
          <Route path='dashboard' element={<AdminDashboard />} />
          <Route path='reports' element={<Report />} />
          <Route path='smart-camera' element={<SmartCamera />} />
          <Route path='analytics' element={<Analytics />} />
        </Route>

        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
