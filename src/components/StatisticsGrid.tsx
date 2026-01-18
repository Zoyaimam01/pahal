import React from 'react'
import { StatCard } from './ui/StatCard'

export const StatisticsGrid = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
      <StatCard 
        title='Total Incidents'
        value='342'
        trend={{ value: 12, isPositive: false }}
      />
      <StatCard 
        title='Avg Response Time'
        value='4.2m'
        trend={{ value: 8, isPositive: true }}
      />
      <StatCard 
        title='Resolved Rate'
        value='94%'
        trend={{ value: 3, isPositive: true }}
      />
      <StatCard 
        title='Active Responders'
        value='156'
        trend={{ value: 5, isPositive: true }}
      />
    </div>
  )
}
