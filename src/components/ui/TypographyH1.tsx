import cn from '@/utils/cn'

interface TypographyH1Props extends React.HTMLAttributes<HTMLHeadElement> {
  children: React.ReactNode
}

const TypographyH1 = ({ children, className, ...props }: TypographyH1Props) => {
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
