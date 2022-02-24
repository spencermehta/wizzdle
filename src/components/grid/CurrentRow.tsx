import { MAX_WORD_LENGTH } from '../../constants/settings'
import { Cell } from './Cell'
import { unicodeSplit } from '../../lib/words'

type Props = {
  guess: string
  className: string
}

export const CurrentRow = ({ guess, className }: Props) => {
  const splitGuess = unicodeSplit(guess)
  const emptyCells = Array.from(Array(MAX_WORD_LENGTH - splitGuess.length))
  const classes = `flex justify-center mb-1 ${className}`

  return (
    <div className={classes}>
      {splitGuess.length < 3 && (
        <>
          {splitGuess.map((letter, i) => (
            <Cell key={i} value={letter} />
          ))}
          {emptyCells.slice(0, 3 - splitGuess.length).map((_, i) => (
            <Cell key={i} />
          ))}
          <h1 className="text-xl dark:text-white">to</h1>
          {emptyCells.slice(0, 3).map((_, i) => (
            <Cell key={i} />
          ))}
        </>
      )}
      {splitGuess.length >= 3 && (
        <>
          {splitGuess.slice(0, 3).map((letter, i) => (
            <Cell key={i} value={letter} />
          ))}
          <h1 className="text-xl dark:text-white">to</h1>
          {splitGuess.slice(3, splitGuess.length).map((letter, i) => (
            <Cell key={i} value={letter} />
          ))}
          {emptyCells.map((_, i) => (
            <Cell key={i} />
          ))}
        </>
      )}
    </div>
  )
}
