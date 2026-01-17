import React from 'react'
import { StatusBadge } from '../ui/StatusBadge'

interface IncidentCardProps {
  id: string
  type: string
  location: string
  time: string
  status: 'pending' | 'active' | 'resolved' | 'cancelled'
  severity: 'low' | 'medium' | 'high'
}

export const IncidentCard: React.FC<IncidentCardProps> = ({
  id,
  type,
  location,
  time,
  status,
  severity
}) => {
  const severityColors = {
    low: 'border-l-green-500',
    medium: 'border-l-yellow-500',
    high: 'border-l-red-500'
  }

  return (
    <div className={g-white rounded-lg shadow p-4 border-l-4 +severityColors[severity]}>
      <div className='flex justify-between items-start mb-2'>
        <div>
          <h3 className='font-semibold text-lg'>{type}</h3>
          <p className='text-sm text-gray-500'>ID: {id}</p>
        </div>
        <StatusBadge status={status} />
      </div>
      <div className='space-y-1 text-sm'>
        <p className='text-gray-700'> {location}</p>
        <p className='text-gray-500'> {time}</p>
      </div>
    </div>
  )
}
