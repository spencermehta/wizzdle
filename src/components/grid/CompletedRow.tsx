import haversine from 'haversine'
import { getGuessStatuses } from '../../lib/statuses'
import { Cell } from './Cell'
import { unicodeSplit } from '../../lib/words'
import parseCoord from './parseCoord'
const stations = require('./stations.json')

type Props = {
  guess: string
  isRevealing?: boolean
}

export const CompletedRow = ({ guess, isRevealing }: Props) => {
  const statuses = getGuessStatuses(guess)
  const splitGuess = unicodeSplit(guess)
  const stationA = splitGuess.slice(0, 3).join('')
  const stationB = splitGuess.slice(3, 6).join('')

  const { solution } = JSON.parse(
    window.localStorage.getItem('gameState') ?? ''
  )
  const realStationA = solution.slice(0, 3)
  const realStationB = solution.slice(3, 6)

  const stationAObj = stations.filter((s: any) => s.stationCode === stationA)[0]
  const stationBObj = stations.filter((s: any) => s.stationCode === stationB)[0]

  const realStationAObj = stations.filter(
    (s: any) => s.stationCode === realStationA
  )[0]
  const realStationBObj = stations.filter(
    (s: any) => s.stationCode === realStationB
  )[0]

  const stationADist = Math.round(
    haversine(
      {
        latitude: parseFloat(
          parseCoord(stationAObj.locationDetails.coordinates.latitude)
        ),
        longitude: parseFloat(
          parseCoord(stationAObj.locationDetails.coordinates.longitude)
        ),
      },
      {
        latitude: parseFloat(
          parseCoord(realStationAObj.locationDetails.coordinates.latitude)
        ),
        longitude: parseFloat(
          parseCoord(realStationAObj.locationDetails.coordinates.longitude)
        ),
      }
    )
  )

  const stationBDist = Math.round(
    haversine(
      {
        latitude: parseFloat(
          parseCoord(stationBObj.locationDetails.coordinates.latitude)
        ),
        longitude: parseFloat(
          parseCoord(stationBObj.locationDetails.coordinates.longitude)
        ),
      },
      {
        latitude: parseFloat(
          parseCoord(realStationBObj.locationDetails.coordinates.latitude)
        ),
        longitude: parseFloat(
          parseCoord(realStationBObj.locationDetails.coordinates.longitude)
        ),
      }
    )
  )
  console.log(stationADist, stationBDist)

  return (
    <>
      <div className="flex justify-center mb-1">
        {splitGuess.slice(0, 3).map((letter, i) => (
          <Cell
            key={i}
            value={letter}
            status={statuses[i]}
            position={i}
            isRevealing={isRevealing}
            isCompleted
          />
        ))}
        <h1 className="text-xl dark:text-white">to</h1>
        {splitGuess.slice(3, 6).map((letter, i) => (
          <Cell
            key={i}
            value={letter}
            status={statuses[i]}
            position={i}
            isRevealing={isRevealing}
            isCompleted
          />
        ))}
      </div>
      <div className="flex justify-center mb-1">
        <h1 className="text-xl dark:text-white">
          A: {stationADist}km, B: {stationBDist}km
        </h1>
      </div>
    </>
  )
}
