import cn from '@/utils/cn'
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div
      {...props}
      className={cn('w-full rounded-lg border border-green-500 p-6', className)}
    >
      {children}
    </div>
  )
}

export default Card
