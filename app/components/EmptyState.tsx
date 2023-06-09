'use client'

import Heading from './Heading'
import Button from './Button'
import { useRouter } from 'next/navigation'

interface EmptySpaceProps {
  title?: string
  subtitle?: string
  showReset?: boolean
}

const EmptyState: React.FC<EmptySpaceProps> = ({
  title = 'No exact match',
  subtitle = 'Try changing or removing some of your filters',
  showReset,
}) => {
  const router = useRouter()

  return (
    <div
      className="
    h-[60vh]
    flex
    flex-col
    gap-2
    justify-center
    items-center
  "
    >
      <Heading center title={title} subtitle={subtitle} />
      <div
        className="
        w-48
        mt-4
      "
      ></div>
      <div className="w-48 mt-4">
        {showReset && (
          <Button
            outline
            label="Remove all filters"
            onClick={() => router.push('/')}
          />
        )}
      </div>
    </div>
  )
}

export default EmptyState
