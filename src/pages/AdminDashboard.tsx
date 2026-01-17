import React from 'react'
import { StatCard } from '../components/ui/StatCard'

export default function AdminDashboard() {
  return (
    <div className='min-h-screen bg-gray-50 py-8'>
      <div className='max-w-7xl mx-auto px-4'>
        <h1 className='text-4xl font-bold mb-8'>Command Center Dashboard</h1>
        
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mb-8'>
          <StatCard title='Active Incidents' value='12' />
          <StatCard title='Pending Reports' value='8' />
          <StatCard title='Resolved Today' value='24' />
          <StatCard title='Response Time' value='4.2 min' />
        </div>

        <div className='bg-white rounded-lg shadow p-6'>
          <h2 className='text-2xl font-bold mb-4'>Recent Incidents</h2>
          <p className='text-gray-600'>Incident feed will be displayed here</p>
        </div>
      </div>
    </div>
  )
}
