import React, { useState } from 'react'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { Label } from '../ui/Label'
import { Textarea } from '../ui/Textarea'

export const ReportForm: React.FC = () => {
  const [formData, setFormData] = useState({
    type: '',
    location: '',
    description: '',
    severity: 'medium'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Report submitted successfully!')
  }

  return (
    <form onSubmit={handleSubmit} className='bg-white rounded-lg shadow-lg p-6 space-y-6'>
      <h2 className='text-2xl font-bold'>Report an Incident</h2>
      
      <div className='space-y-2'>
        <Label htmlFor='type'>Incident Type</Label>
        <Input
          id='type'
          value={formData.type}
          onChange={(e) => setFormData({...formData, type: e.target.value})}
          placeholder='e.g., Car Accident, Fire, Medical Emergency'
          required
        />
      </div>

      <div className='space-y-2'>
        <Label htmlFor='location'>Location</Label>
        <Input
          id='location'
          value={formData.location}
          onChange={(e) => setFormData({...formData, location: e.target.value})}
          placeholder='Enter incident location'
          required
        />
      </div>

      <div className='space-y-2'>
        <Label htmlFor='description'>Description</Label>
        <Textarea
          id='description'
          value={formData.description}
          onChange={(e) => setFormData({...formData, description: e.target.value})}
          placeholder='Describe what happened...'
          rows={4}
          required
        />
      </div>

      <div className='space-y-2'>
        <Label htmlFor='severity'>Severity</Label>
        <select
          id='severity'
          value={formData.severity}
          onChange={(e) => setFormData({...formData, severity: e.target.value})}
          className='w-full h-10 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-600'
        >
          <option value='low'>Low</option>
          <option value='medium'>Medium</option>
          <option value='high'>High</option>
        </select>
      </div>

      <Button type='submit' className='w-full'>Submit Report</Button>
    </form>
  )
}
