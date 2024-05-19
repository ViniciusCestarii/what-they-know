import cn from '@/utils/cn'

const TypographyH1 = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadElement>) => {
  return (
    <h1
      {...props}
      className={cn(
        'scroll-m-20 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight',
        className,
      )}
    >
      {children}
    </h1>
  )
}

export default TypographyH1
