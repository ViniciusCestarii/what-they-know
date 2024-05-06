interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const Card = ({ children, ...props }: CardProps) => {
  return (
    <section
      {...props}
      className={`w-full rounded-lg border border-green-500 p-6 ${props.className}`}
    >
      {children}
    </section>
  )
}

export default Card
