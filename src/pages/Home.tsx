import React from 'react'
import { Button } from '../components/ui/Button'

export default function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-white'>
      <div className='container mx-auto px-4 py-16'>
        <div className='text-center'>
          <h1 className='text-5xl font-bold text-gray-900 mb-4'>
            Pahal
          </h1>
          <p className='text-xl text-gray-600 mb-8'>
            AI-Powered Emergency Response System
          </p>
          <Button size='lg'>
            Report an Incident
          </Button>
        </div>
      </div>
    </div>
  )
}
