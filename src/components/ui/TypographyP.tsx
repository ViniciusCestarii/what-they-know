import cn from '@/utils/cn'

const TypographyP = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadElement>) => {
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
