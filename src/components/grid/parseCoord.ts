import bearingPositivity from './bearingPositivity'

const parseCoord = (coord: string): string => {
  const n = coord.length
  const bearing = coord.slice(n - 1)
  const degrees = coord.slice(0, n - 5)
  const minutesAndSeconds = coord.slice(n - 5, n - 1)

  return `${bearingPositivity(bearing)}${degrees}.${minutesAndSeconds}`
}

export default parseCoord
