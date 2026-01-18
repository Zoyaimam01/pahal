import React from 'react'
import { cn } from '../../lib/utils'

export interface Toast {
  id: string
  title: string
  description?: string
  type: 'success' | 'error' | 'warning' | 'info'
}

interface ToastProps extends Toast {
  onClose: () => void
}

export const Toast: React.FC<ToastProps> = ({ title, description, type, onClose }) => {
  const typeColors = {
    success: 'bg-green-50 border-green-200 text-green-800',
    error: 'bg-red-50 border-red-200 text-red-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800'
  }

  React.useEffect(() => {
    const timer = setTimeout(onClose, 3000)
    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div
      className={cn(
        'max-w-sm rounded-lg border p-4 shadow-lg animate-slide-in-right',
        typeColors[type]
      )}
    >
      <h3 className='font-semibold'>{title}</h3>
      {description && <p className='text-sm mt-1'>{description}</p>}
    </div>
  )
}
