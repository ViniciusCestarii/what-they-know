import cn from '@/utils/cn'

interface TypographyH2Props extends React.HTMLAttributes<HTMLHeadElement> {
  children: React.ReactNode
}

const TypographyH2 = ({ children, className, ...props }: TypographyH2Props) => {
  return (
    <h2 {...props} className={cn('text-2xl font-bold', className)}>
      {children}
    </h2>
  )
}

export default TypographyH2
