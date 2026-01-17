import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { Home, AlertTriangle, MapPinned } from 'lucide-react'

export default function PublicLayout() {
  return (
    <div className='min-h-screen'>
      <nav className='bg-white shadow-sm border-b'>
        <div className='max-w-7xl mx-auto px-4 py-4'>
          <div className='flex justify-between items-center'>
            <Link to='/' className='text-2xl font-bold text-blue-600 flex items-center gap-2'>
              <AlertTriangle className='w-8 h-8' />
              Pahal
            </Link>
            <div className='flex gap-6'>
              <Link to='/' className='flex items-center gap-2 hover:text-blue-600 transition'>
                <Home className='w-4 h-4' />
                <span className='hidden md:inline'>Home</span>
              </Link>
              <Link to='/report' className='flex items-center gap-2 hover:text-blue-600 transition'>
                <AlertTriangle className='w-4 h-4' />
                <span className='hidden md:inline'>Report</span>
              </Link>
              <Link to='/hotspots' className='flex items-center gap-2 hover:text-blue-600 transition'>
                <MapPinned className='w-4 h-4' />
                <span className='hidden md:inline'>Hotspots</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}
