export default function dateFilter(value, format = 'date') {
  const date = new Date(Number(value))
  const options = {}

  if (!value) return

  if (format.includes('time')) {
    options.hour = '2-digit',
    options.minute = '2-digit',
    options.hour12 = false
  }

  if (format.includes('date')) {
    options.weekday = 'short',
    options.year = 'numeric',
    options.month = 'short',
    options.day = 'numeric'
  }

  return new Intl.DateTimeFormat('en-US', options).format(date)
}