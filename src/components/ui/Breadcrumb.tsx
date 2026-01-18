import React from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../../lib/utils'

interface BreadcrumbProps extends React.HTMLAttributes<HTMLOListElement> {}

export const Breadcrumb = React.forwardRef<HTMLOListElement, BreadcrumbProps>(
  ({ className, ...props }, ref) => (
    <ol
      ref={ref}
      className={cn('flex items-center gap-2 text-sm', className)}
      {...props}
    />
  )
)
Breadcrumb.displayName = 'Breadcrumb'

interface BreadcrumbItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  href?: string
  isCurrentPage?: boolean
}

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  href,
  isCurrentPage,
  className,
  children,
  ...props
}) => {
  return (
    <li className={cn('flex items-center gap-2', className)} {...props}>
      {href && !isCurrentPage ? (
        <Link to={href} className='text-blue-600 hover:underline'>
          {children}
        </Link>
      ) : (
        children
      )}
      {!isCurrentPage && <span className='text-gray-400'>/</span>}
    </li>
  )
}
