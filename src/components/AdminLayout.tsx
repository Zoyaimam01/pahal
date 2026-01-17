import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function AdminLayout() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <nav className='bg-gray-900 text-white'>
        <div className='max-w-7xl mx-auto px-4 py-4'>
          <div className='flex justify-between items-center'>
            <Link to='/admin/dashboard' className='text-2xl font-bold'>Pahal Admin</Link>
            <div className='flex gap-6'>
              <Link to='/admin/dashboard' className='hover:text-blue-400 transition'>Dashboard</Link>
              <Link to='/admin/reports' className='hover:text-blue-400 transition'>Reports</Link>
              <Link to='/admin/smart-camera' className='hover:text-blue-400 transition'>Camera</Link>
              <Link to='/admin/analytics' className='hover:text-blue-400 transition'>Analytics</Link>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}
