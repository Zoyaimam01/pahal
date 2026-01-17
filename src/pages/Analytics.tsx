import React from 'react'

export default function Analytics() {
  return (
    <div className='min-h-screen bg-gray-50 py-8'>
      <div className='max-w-7xl mx-auto px-4'>
        <h1 className='text-4xl font-bold mb-8'>Analytics & Insights</h1>
        
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          <div className='bg-white rounded-lg shadow p-6'>
            <h3 className='text-xl font-semibold mb-4'>Incident Trends</h3>
            <p className='text-gray-600'>Chart will be displayed here</p>
          </div>
          
          <div className='bg-white rounded-lg shadow p-6'>
            <h3 className='text-xl font-semibold mb-4'>Response Metrics</h3>
            <p className='text-gray-600'>Metrics visualization here</p>
          </div>
        </div>
      </div>
    </div>
  )
}
