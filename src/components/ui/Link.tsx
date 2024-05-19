import React from 'react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import cn from '@/utils/cn'

interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    NextLinkProps {
  href: string
}

const Link = ({ className, ...props }: LinkProps) => {
  return <NextLink {...props} className={cn('hover:underline', className)} />
}

export default Link
