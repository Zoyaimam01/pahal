import React from 'react'
import { Button } from '../components/ui/Button'

export default function AdminLogin() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center px-4'>
      <div className='bg-white rounded-lg shadow-xl p-8 w-full max-w-md'>
        <h2 className='text-3xl font-bold text-center mb-6'>Admin Login</h2>
        <form className='space-y-4'>
          <div>
            <label className='block text-sm font-medium mb-2'>Email</label>
            <input type='email' className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600' />
          </div>
          <div>
            <label className='block text-sm font-medium mb-2'>Password</label>
            <input type='password' className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600' />
          </div>
          <Button className='w-full'>Sign In</Button>
        </form>
      </div>
    </div>
  )
}
