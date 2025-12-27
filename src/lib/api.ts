export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337/api';

export async function fetchAPI(endpoint: string, options: RequestInit = {}) {
  const res = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch API: ${res.statusText}`);
  }

  return res.json();
}
