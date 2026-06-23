// ── src/components/Navbar/Navbar.jsx ──
import { useWindowWidth } from '../../hooks/useWindowWidth'
import AmazonLogo from '../UI/AmazonLogo'
import SearchBar from '../UI/SearchBar'
import NavTop from './NavTop'
import NavSecondary from './NavSecondary'

export default function Navbar({ cartCount, searchVal, onSearchChange, onSearch, onCartOpen, onMenuOpen }) {
  const width = useWindowWidth()
  const isMobile = width < 768

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
      <NavTop
        isMobile={isMobile}
        cartCount={cartCount}
        searchVal={searchVal}
        onSearchChange={onSearchChange}
        onSearch={onSearch}
        onCartOpen={onCartOpen}
      />
      <NavSecondary onMenuOpen={onMenuOpen} />
    </header>
  )
}
