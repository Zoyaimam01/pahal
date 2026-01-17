import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { LayoutDashboard, FileText, Camera, BarChart3 } from 'lucide-react'

export default function AdminLayout() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <nav className='bg-gray-900 text-white shadow-lg'>
        <div className='max-w-7xl mx-auto px-4 py-4'>
          <div className='flex justify-between items-center'>
            <Link to='/admin/dashboard' className='text-2xl font-bold flex items-center gap-2'>
               Pahal Admin
            </Link>
            <div className='flex gap-6'>
              <Link to='/admin/dashboard' className='flex items-center gap-2 hover:text-blue-400 transition'>
                <LayoutDashboard className='w-4 h-4' />
                Dashboard
              </Link>
              <Link to='/admin/reports' className='flex items-center gap-2 hover:text-blue-400 transition'>
                <FileText className='w-4 h-4' />
                Reports
              </Link>
              <Link to='/admin/smart-camera' className='flex items-center gap-2 hover:text-blue-400 transition'>
                <Camera className='w-4 h-4' />
                Camera
              </Link>
              <Link to='/admin/analytics' className='flex items-center gap-2 hover:text-blue-400 transition'>
                <BarChart3 className='w-4 h-4' />
                Analytics
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}
