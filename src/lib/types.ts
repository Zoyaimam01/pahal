export interface Incident {
  id: string
  type: string
  location: string
  time: string
  status: 'pending' | 'active' | 'resolved' | 'cancelled'
  severity: 'low' | 'medium' | 'high'
}

export interface User {
  id: string
  email: string
  name: string
  role: 'user' | 'admin' | 'responder'
}

export interface Report {
  id: string
  type: string
  location: string
  description: string
  severity: 'low' | 'medium' | 'high'
  timestamp: string
  userId: string
}

export interface LocationCoord {
  lat: number
  lng: number
}
