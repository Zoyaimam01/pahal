import React from 'react'
import { Button } from '../components/ui/Button'
import { Switch } from '../components/ui/Switch'

export default function Settings() {
  return (
    <div className='min-h-screen bg-gray-50 py-12'>
      <div className='max-w-4xl mx-auto px-4'>
        <h1 className='text-4xl font-bold mb-8'>Settings</h1>
        
        <div className='bg-white rounded-lg shadow-lg p-8 space-y-6'>
          <div className='border-b pb-6'>
            <h2 className='text-2xl font-semibold mb-4'>Notifications</h2>
            <div className='space-y-4'>
              <div className='flex justify-between items-center'>
                <span>Email Notifications</span>
                <input type='checkbox' className='w-5 h-5' defaultChecked />
              </div>
              <div className='flex justify-between items-center'>
                <span>SMS Alerts</span>
                <input type='checkbox' className='w-5 h-5' />
              </div>
              <div className='flex justify-between items-center'>
                <span>Push Notifications</span>
                <input type='checkbox' className='w-5 h-5' defaultChecked />
              </div>
            </div>
          </div>

          <div className='border-b pb-6'>
            <h2 className='text-2xl font-semibold mb-4'>Privacy</h2>
            <div className='space-y-4'>
              <div className='flex justify-between items-center'>
                <span>Make profile public</span>
                <input type='checkbox' className='w-5 h-5' />
              </div>
              <div className='flex justify-between items-center'>
                <span>Allow data sharing</span>
                <input type='checkbox' className='w-5 h-5' />
              </div>
            </div>
          </div>

          <div>
            <Button>Save Settings</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
