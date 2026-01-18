import React from 'react'
import { cn } from '../lib/utils'

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg'
}

export const Loader: React.FC<LoaderProps> = ({ size = 'md', className }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  return (
    <div className={cn('flex items-center justify-center', className)}>
      <div
        className={cn(
          'animate-spin rounded-full border-4 border-gray-200 border-t-blue-600',
          sizeClasses[size]
        )}
      />
    </div>
  )
}
