import React from 'react'
import { cn } from '../../lib/utils'

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline'
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const variants = {
      default: 'border transparent bg-blue-600 text-blue-50',
      secondary: 'border transparent bg-gray-100 text-gray-800',
      destructive: 'border transparent bg-red-600 text-red-50',
      outline: 'text-foreground'
    }

    return (
      <div
        ref={ref}
        className={cn('inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors', variants[variant], className)}
        {...props}
      />
    )
  }
)

Badge.displayName = 'Badge'
