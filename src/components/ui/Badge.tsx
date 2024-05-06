interface BadgeProps {
  children: React.ReactNode
}

const Badge = ({ children }: BadgeProps) => {
  return (
    <div className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-background">
      {children}
    </div>
  )
}

export default Badge
