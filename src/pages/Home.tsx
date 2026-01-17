import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'

export default function Home() {
  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='bg-gradient-to-b from-blue-50 to-white py-20'>
        <div className='max-w-7xl mx-auto px-4 text-center'>
          <h1 className='text-6xl font-bold mb-6 text-gray-900'>Pahal</h1>
          <p className='text-2xl text-gray-600 mb-4'>AI-Powered Emergency Response System</p>
          <p className='text-lg text-gray-500 mb-8 max-w-2xl mx-auto'>
            Saving lives through faster response with real-time AI detection and community reporting
          </p>
          <div className='flex gap-4 justify-center'>
            <Link to='/report'>
              <Button size='lg'>Report Incident</Button>
            </Link>
            <Link to='/hotspots'>
              <Button size='lg' variant='outline'>View Hotspots</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4'>
          <h2 className='text-4xl font-bold text-center mb-12'>Key Features</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='text-center p-6'>
              <div className='text-4xl mb-4'></div>
              <h3 className='text-xl font-semibold mb-2'>AI Detection</h3>
              <p className='text-gray-600'>Smart cameras automatically detect accidents in real-time</p>
            </div>
            <div className='text-center p-6'>
              <div className='text-4xl mb-4'></div>
              <h3 className='text-xl font-semibold mb-2'>Community Reports</h3>
              <p className='text-gray-600'>Citizens can quickly report incidents with photos</p>
            </div>
            <div className='text-center p-6'>
              <div className='text-4xl mb-4'></div>
              <h3 className='text-xl font-semibold mb-2'>Hotspot Mapping</h3>
              <p className='text-gray-600'>Visualize accident-prone areas for prevention</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
