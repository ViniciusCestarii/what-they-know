'use client'
import cn from '@/utils/cn'
import { Tooltip as ReactTooltip, ITooltip } from 'react-tooltip'

interface TooltipProps extends ITooltip {}

const Tooltip = ({ className, ...props }: TooltipProps) => {
  return (
    <ReactTooltip
      disableStyleInjection
      {...props}
      className={cn('bg-black p-2 rounded-md', className)}
    />
  )
}

export default Tooltip
