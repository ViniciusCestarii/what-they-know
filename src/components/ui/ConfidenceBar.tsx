import { Confidence } from '@/types/companyTypes'
import cn from '@/utils/cn'
import React from 'react'

interface ConfidenceBarProps extends React.HTMLAttributes<HTMLDivElement> {
  confidence: Confidence
}

const getLevel = (confidence: Confidence): number => {
  switch (confidence) {
    case 'Very High':
      return 4
    case 'High':
      return 3
    case 'Moderate':
      return 2
    case 'Low':
      return 1
  }
}

const ConfidenceBar = ({
  confidence,
  className,
  ...props
}: ConfidenceBarProps) => {
  const level = getLevel(confidence)

  return (
    <span
      {...props}
      className={cn('flex gap-1 text-sm items-center', className)}
    >
      Confidence:
      {Array.from({ length: 4 }).map((_, i) => (
        <span
          key={i}
          className={` ${level > i ? 'bg-primary border-primary' : 'bg-background border-green-900 border'} w-3 h-3 rounded-sm border-2`}
        />
      ))}
    </span>
  )
}

export default ConfidenceBar
