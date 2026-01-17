import React from 'react'
import { ReportForm } from '../components/forms/ReportForm'

export default function Report() {
  return (
    <div className='min-h-screen bg-gray-50 py-12'>
      <div className='max-w-4xl mx-auto px-4'>
        <div className='mb-8'>
          <h1 className='text-4xl font-bold mb-2'>Report an Incident</h1>
          <p className='text-gray-600'>Help save lives by reporting accidents quickly and accurately</p>
        </div>
        <ReportForm />
      </div>
    </div>
  )
}
