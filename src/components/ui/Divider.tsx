import React from 'react'
import { cn } from '../../lib/utils'

interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical'
}

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'bg-gray-200',
        orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
        className
      )}
      {...props}
    />
  )
}
