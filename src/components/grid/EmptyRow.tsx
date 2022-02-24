import { MAX_WORD_LENGTH } from '../../constants/settings'
import { Cell } from './Cell'

export const EmptyRow = () => {
  const emptyCells = Array.from(Array(MAX_WORD_LENGTH))

  return (
    <div className="flex justify-center mb-1">
      {emptyCells.slice(0, 3).map((_, i) => (
        <Cell key={i} />
      ))}
      <h1 className="text-xl dark:text-white">to</h1>
      {emptyCells.slice(3, 6).map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  )
}
