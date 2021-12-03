import { types } from 'react-bricks/frontend'
import { Link, LinkGetProps } from '@reach/router'

const ActiveLink: types.RenderLocalLink = ({
  href,
  className,
  activeClassName,
  isAdmin,
  children,
}) => {
  const isActive = ({ isCurrent }: LinkGetProps) => {
    return isCurrent ? { className: activeClassName } : {}
  }

  return (
    <Link to={href} className={className} getProps={isActive}>
      {children}
    </Link>
  )
}

export default ActiveLink
