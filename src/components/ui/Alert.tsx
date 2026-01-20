import React from 'react'
import { AlertCircle, CheckCircle, InfoIcon, XCircle } from 'lucide-react'
import { cn } from '../../lib/utils'

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'info' | 'success' | 'warning' | 'error'
  title?: string
}

export const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  title,
  children,
  className,
  ...props
}) => {
  const variants = {
    info: 'bg-blue-50 border-blue-200 text-blue-900',
    success: 'bg-green-50 border-green-200 text-green-900',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-900',
    error: 'bg-red-50 border-red-200 text-red-900'
  }

  const icons = {
    info: <InfoIcon className='w-5 h-5' />,
    success: <CheckCircle className='w-5 h-5' />,
    warning: <AlertCircle className='w-5 h-5' />,
    error: <XCircle className='w-5 h-5' />
  }

  return (
    <div
      className={cn(
        'rounded-lg border p-4 flex gap-3',
        variants[variant],
        className
      )}
      {...props}
    >
      <div className='flex-shrink-0'>{icons[variant]}</div>
      <div className='flex-1'>
        {title && <h4 className='font-semibold mb-1'>{title}</h4>}
        <p className='text-sm'>{children}</p>
      </div>
    </div>
  )
}
