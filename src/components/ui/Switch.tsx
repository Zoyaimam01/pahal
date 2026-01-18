import React from 'react'
import { cn } from '../../lib/utils'

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, ...props }, ref) => (
    <input
      type='checkbox'
      ref={ref}
      className={cn(
        'relative inline-flex h-6 w-11 cursor-pointer rounded-full bg-gray-300 transition-colors after:absolute after:top-0.5 after:left-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-transform checked:bg-blue-600 checked:after:translate-x-5',
        className
      )}
      {...props}
    />
  )
)

Switch.displayName = 'Switch'
