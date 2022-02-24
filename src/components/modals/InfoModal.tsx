import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the origin-destination pair in 6 tries. After each guess, the
        color of the tiles will change to show how close your guess was to the
        route.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="B"
          status="correct"
        />
        <Cell value="U" />
        <Cell value="D" />
        <Cell value="L" />
        <Cell value="T" />
        <Cell value="N" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter W is in the route and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="B" />
        <Cell value="U" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="D"
          status="present"
        />
        <Cell value="L" />
        <Cell value="T" />
        <Cell value="N" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter L is in the route but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="B" />
        <Cell value="U" />
        <Cell value="D" />
        <Cell isRevealing={true} isCompleted={true} value="L" status="absent" />
        <Cell value="T" />
        <Cell value="N" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter U is not in the route in any spot.
      </p>
    </BaseModal>
  )
}
