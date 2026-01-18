import React from 'react'
import { cn } from '../../lib/utils'

interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode
  title: string
  description: string
  action?: React.ReactNode
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  action,
  className
}) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-200 bg-gray-50 py-12 px-4 text-center',
        className
      )}
    >
      {icon && <div className='mb-4 text-4xl'>{icon}</div>}
      <h3 className='mb-2 text-lg font-semibold'>{title}</h3>
      <p className='mb-6 text-sm text-gray-500 max-w-xs'>{description}</p>
      {action && <div>{action}</div>}
    </div>
  )
}
