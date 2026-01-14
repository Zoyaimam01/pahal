import React from 'react'
import { cn } from '../../lib/utils'

interface StatCardProps {
  title: string
  value: string | number
  icon?: React.ReactNode
  trend?: {
    value: number
    isPositive: boolean
  }
  className?: string
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  trend,
  className
}) => {
  return (
    <div
      className={cn(
        'rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md',
        className
      )}
    >
      <div className='flex items-start justify-between'>
        <div className='space-y-1'>
          <p className='text-sm font-medium text-gray-600'>{title}</p>
          <p className='text-3xl font-bold text-gray-900'>{value}</p>
          {trend && (
            <p className={cn(
              'text-sm font-medium',
              trend.isPositive ? 'text-green-600' : 'text-red-600'
            )}>
              {trend.isPositive ? '' : ''} {Math.abs(trend.value)}%
            </p>
          )}
        </div>
        {icon && (
          <div className='rounded-lg bg-blue-50 p-3 text-blue-600'>
            {icon}
          </div>
        )}
      </div>
    </div>
  )
}
