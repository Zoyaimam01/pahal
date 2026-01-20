const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

export async function fetchApi<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const url = \\\\
  
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    })

    if (!response.ok) {
      throw new Error(\API error: \\)
    }

    return await response.json()
  } catch (error) {
    console.error('Fetch error:', error)
    throw error
  }
}

export async function getIncidents() {
  return fetchApi('/incidents')
}

export async function reportIncident(data: any) {
  return fetchApi('/reports', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

export async function getAnalytics() {
  return fetchApi('/analytics')
}
