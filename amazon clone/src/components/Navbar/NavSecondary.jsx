// ── src/components/Navbar/NavSecondary.jsx ──
import { NAV_LINKS } from '../../data/navigation'
import styles from './NavSecondary.module.css'

export default function NavSecondary({ onMenuOpen }) {
  return (
    <nav className={`${styles.nav} no-scrollbar`}>
      <div className={styles.all} onClick={onMenuOpen}>☰ All</div>
      {NAV_LINKS.map((link) => (
        <a key={link} href="#" className={styles.link}>{link}</a>
      ))}
      <a href="#" className={styles.prime}>Try Prime</a>
    </nav>
  )
}
