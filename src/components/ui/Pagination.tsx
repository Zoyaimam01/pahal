import React from 'react'
import { cn } from '../../lib/utils'

interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center justify-center gap-2', className)} {...props} />
  )
)
Pagination.displayName = 'Pagination'

interface PaginationItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean
}

export const PaginationItem = React.forwardRef<HTMLButtonElement, PaginationItemProps>(
  ({ className, isActive, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'px-3 py-1 rounded-lg text-sm font-medium transition-colors',
        isActive ? 'bg-blue-600 text-white' : 'bg-white border border-gray-300 hover:bg-gray-50',
        className
      )}
      {...props}
    />
  )
)
PaginationItem.displayName = 'PaginationItem'
