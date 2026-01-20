import React from 'react'
import { cn } from '../../lib/utils'

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, ...props }, ref) => (
    <input
      type='radio'
      ref={ref}
      className={cn(
        'h-4 w-4 rounded-full border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  )
)

Radio.displayName = 'Radio'
