import cn from '@/utils/cn'

const TypographyH2 = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadElement>) => {
  return (
    <h2 {...props} className={cn('text-2xl font-bold', className)}>
      {children}
    </h2>
  )
}

export default TypographyH2
