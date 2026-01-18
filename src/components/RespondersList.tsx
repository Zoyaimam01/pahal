import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card'

export const RespondersList = () => {
  const responders = [
    { id: 1, name: 'Raj Kumar', status: 'available', vehicles: 1 },
    { id: 2, name: 'Priya Singh', status: 'responding', vehicles: 2 },
    { id: 3, name: 'Amit Patel', status: 'off-duty', vehicles: 0 }
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Available Responders</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='space-y-3'>
          {responders.map((responder) => (
            <div key={responder.id} className='flex justify-between items-center pb-3 border-b'>
              <div>
                <p className='font-medium'>{responder.name}</p>
                <p className='text-sm text-gray-500'>{responder.vehicles} vehicles</p>
              </div>
              <span className={px-2 py-1 rounded text-xs font-semibold \}>
                {responder.status}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
