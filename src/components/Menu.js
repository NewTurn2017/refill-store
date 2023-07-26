import { MenuContainer, StyledLink } from './styles/MenuStyles'

export default function Menu() {
  return (
    <MenuContainer>
      <StyledLink href="/">Home</StyledLink>
      <StyledLink href="/store">Search</StyledLink>
      <StyledLink href="/blog">Blog</StyledLink>
      <StyledLink href="/contact">Contact</StyledLink>
    </MenuContainer>
  )
}
