import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/Button'

export default function ErrorPage() {
  const navigate = useNavigate()

  return (
    <div className='min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4'>
      <div className='text-center max-w-md'>
        <h1 className='text-6xl font-bold text-gray-900 mb-4'>404</h1>
        <h2 className='text-2xl font-semibold text-gray-800 mb-4'>Page Not Found</h2>
        <p className='text-gray-600 mb-8'>The page you're looking for doesn't exist or has been moved.</p>
        <Button onClick={() => navigate('/')} size='lg'>
          Go Back Home
        </Button>
      </div>
    </div>
  )
}
