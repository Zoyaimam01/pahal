import React from 'react'
import { cn } from '../../lib/utils'

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'destructive' | 'warning' | 'success'
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const variants = {
      default: 'bg-blue-50 text-blue-800 border-blue-200',
      destructive: 'bg-red-50 text-red-800 border-red-200',
      warning: 'bg-yellow-50 text-yellow-800 border-yellow-200',
      success: 'bg-green-50 text-green-800 border-green-200'
    }

    return (
      <div
        ref={ref}
        className={cn(
          'relative w-full rounded-lg border px-4 py-3 text-sm',
          variants[variant],
          className
        )}
        {...props}
      />
    )
  }
)

Alert.displayName = 'Alert'
