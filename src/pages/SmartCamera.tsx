import React from 'react'

export default function SmartCamera() {
  return (
    <div className='min-h-screen bg-gray-50 py-8'>
      <div className='max-w-7xl mx-auto px-4'>
        <h1 className='text-4xl font-bold mb-8'>Smart Camera Feed</h1>
        
        <div className='bg-white rounded-lg shadow p-6 mb-6'>
          <h2 className='text-2xl font-semibold mb-4'>Live Camera Feed</h2>
          <div className='aspect-video bg-gray-900 rounded flex items-center justify-center'>
            <p className='text-white'>Camera feed will be displayed here</p>
          </div>
        </div>

        <div className='bg-white rounded-lg shadow p-6'>
          <h2 className='text-2xl font-semibold mb-4'>AI Detection Log</h2>
          <p className='text-gray-600'>Detection events will be listed here</p>
        </div>
      </div>
    </div>
  )
}
