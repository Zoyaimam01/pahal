import React from 'react'
import { cn } from '../lib/utils'

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  action?: React.ReactNode
}

export const Header: React.FC<HeaderProps> = ({
  title,
  description,
  action,
  className
}) => {
  return (
    <div className={cn('mb-8', className)}>
      <div className='flex justify-between items-start'>
        <div>
          <h1 className='text-4xl font-bold text-gray-900'>{title}</h1>
          {description && (
            <p className='mt-2 text-gray-600'>{description}</p>
          )}
        </div>
        {action && <div>{action}</div>}
      </div>
    </div>
  )
}
