import React from 'react'
import { cn } from '../../lib/utils'

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  max?: number
  variant?: 'default' | 'success' | 'warning' | 'error'
}

export const Progress: React.FC<ProgressProps> = ({
  value,
  max = 100,
  variant = 'default',
  className,
  ...props
}) => {
  const percentage = (value / max) * 100

  const variants = {
    default: 'bg-blue-600',
    success: 'bg-green-600',
    warning: 'bg-yellow-600',
    error: 'bg-red-600'
  }

  return (
    <div
      className={cn('w-full h-2 bg-gray-200 rounded-full overflow-hidden', className)}
      {...props}
    >
      <div
        className={cn('h-full transition-all duration-300', variants[variant])}
        style={{ width: \% }}
      />
    </div>
  )
}
