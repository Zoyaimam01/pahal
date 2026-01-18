import React from 'react'
import { Button } from '../components/ui/Button'

export default function Profile() {
  return (
    <div className='min-h-screen bg-gray-50 py-12'>
      <div className='max-w-4xl mx-auto px-4'>
        <div className='bg-white rounded-lg shadow p-8'>
          <h1 className='text-3xl font-bold mb-8'>My Profile</h1>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <label className='block text-sm font-medium mb-2'>Full Name</label>
              <input type='text' className='w-full px-4 py-2 border rounded-lg' placeholder='Your name' />
            </div>
            <div>
              <label className='block text-sm font-medium mb-2'>Email</label>
              <input type='email' className='w-full px-4 py-2 border rounded-lg' placeholder='your@email.com' />
            </div>
            <div>
              <label className='block text-sm font-medium mb-2'>Phone</label>
              <input type='tel' className='w-full px-4 py-2 border rounded-lg' placeholder='+91 XXXXX XXXXX' />
            </div>
            <div>
              <label className='block text-sm font-medium mb-2'>City</label>
              <input type='text' className='w-full px-4 py-2 border rounded-lg' placeholder='Your city' />
            </div>
          </div>

          <div className='mt-8'>
            <Button className='w-full'>Save Changes</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
