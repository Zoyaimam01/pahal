export const dashboardStats = {
  activeIncidents: 12,
  pendingReports: 8,
  resolvedToday: 24,
  averageResponseTime: 4.2,
  totalResponders: 156,
  coverage: 89
}

export const incidentTypes = [
  { type: 'Car Accidents', count: 156, percentage: 45 },
  { type: 'Road Hazards', count: 98, percentage: 28 },
  { type: 'Traffic Violations', count: 67, percentage: 19 },
  { type: 'Other', count: 18, percentage: 8 }
]

export const responseMetrics = [
  { hour: '00:00', avgTime: 4.2 },
  { hour: '04:00', avgTime: 3.8 },
  { hour: '08:00', avgTime: 5.1 },
  { hour: '12:00', avgTime: 4.9 },
  { hour: '16:00', avgTime: 5.5 },
  { hour: '20:00', avgTime: 4.3 }
]
