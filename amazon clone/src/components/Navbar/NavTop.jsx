// ── src/components/Navbar/NavTop.jsx ──
import AmazonLogo from '../UI/AmazonLogo'
import SearchBar from '../UI/SearchBar'
import styles from './NavTop.module.css'

export default function NavTop({ isMobile, cartCount, searchVal, onSearchChange, onSearch, onCartOpen }) {
  return (
    <nav className={`${styles.nav} ${isMobile ? styles.mobile : ''}`}>
      {/* Logo */}
      <a href="#" className={styles.logo}>
        <AmazonLogo height={isMobile ? 24 : 31} />
      </a>

      {/* Deliver to (desktop only) */}
      {!isMobile && (
        <div className={styles.deliver}>
          <span className={styles.deliverIcon}>📍</span>
          <div>
            <span className={styles.deliverTop}>Deliver to</span>
            <span className={styles.deliverBottom}>India</span>
          </div>
        </div>
      )}

      {/* Search */}
      <div className={styles.searchWrap}>
        <SearchBar
          value={searchVal}
          onChange={onSearchChange}
          onSearch={onSearch}
          hideCategory={isMobile}
        />
      </div>

      {/* Right group */}
      <div className={styles.right}>
        {!isMobile && (
          <>
            <div className={styles.navItem}>🇺🇸 EN ▾</div>
            <div className={styles.navItem}>
              <span className={styles.small}>Hello, sign in</span>
              <span className={styles.bold}>Account &amp; Lists ▾</span>
            </div>
            <div className={styles.navItem}>
              <span className={styles.small}>Returns</span>
              <span className={styles.bold}>&amp; Orders</span>
            </div>
          </>
        )}

        {/* Cart */}
        <div className={styles.cart} onClick={onCartOpen}>
          {cartCount > 0 && <span className={styles.cartBadge}>{cartCount}</span>}
          <span className={styles.cartIcon}>🛒</span>
          <span className={styles.bold}>Cart</span>
        </div>
      </div>
    </nav>
  )
}
