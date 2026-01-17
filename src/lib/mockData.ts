export const mockIncidents = [
  {
    id: 'INC-001',
    type: 'Car Accident',
    location: 'MG Road, Sector 28',
    time: '10 mins ago',
    status: 'active' as const,
    severity: 'high' as const
  },
  {
    id: 'INC-002',
    type: 'Minor Collision',
    location: 'Cyber City, Gurgaon',
    time: '25 mins ago',
    status: 'pending' as const,
    severity: 'medium' as const
  },
  {
    id: 'INC-003',
    type: 'Road Hazard',
    location: 'NH-8, Manesar',
    time: '1 hour ago',
    status: 'resolved' as const,
    severity: 'low' as const
  }
]
