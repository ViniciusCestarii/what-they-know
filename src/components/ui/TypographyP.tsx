import cn from '@/utils/cn'

interface TypographyPProps extends React.HTMLAttributes<HTMLHeadElement> {
  children: React.ReactNode
}

const TypographyP = ({ children, className, ...props }: TypographyPProps) => {
  return (
    <p
      {...props}
      className={cn(
        'leading-7 [&:not(:first-child)]:mt-6 text-base',
        className,
      )}
    >
      {children}
    </p>
  )
}

export default TypographyP
