import cn from '@/utils/cn'

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const Badge = ({ children, className, ...props }: BadgeProps) => {
  return (
    <div
      {...props}
      className={cn(
        'rounded-full bg-primary px-3 py-1 text-xs font-bold text-background',
        className,
      )}
    >
      {children}
    </div>
  )
}

export default Badge
