import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function PublicLayout() {
  return (
    <div className='min-h-screen'>
      <nav className='bg-white shadow-sm'>
        <div className='max-w-7xl mx-auto px-4 py-4'>
          <div className='flex justify-between items-center'>
            <Link to='/' className='text-2xl font-bold text-blue-600'>Pahal</Link>
            <div className='flex gap-6'>
              <Link to='/' className='hover:text-blue-600 transition'>Home</Link>
              <Link to='/report' className='hover:text-blue-600 transition'>Report</Link>
              <Link to='/hotspots' className='hover:text-blue-600 transition'>Hotspots</Link>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}
