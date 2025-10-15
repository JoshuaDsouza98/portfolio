// Get the base URL for assets
// In development: '/'
// In production (GitHub Pages): '/portfolio/'
export const BASE_URL = import.meta.env.BASE_URL || '/'

// Helper to get full asset path
export const asset = (path: string) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${BASE_URL}${cleanPath}`
}
