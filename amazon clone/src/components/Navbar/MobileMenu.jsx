// ── src/components/Navbar/MobileMenu.jsx ──
import { NAV_LINKS } from '../../data/navigation'
import styles from './MobileMenu.module.css'

export default function MobileMenu({ onClose }) {
  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.drawer}>
        <div className={styles.header}>
          <span>☰ Hello, sign in</span>
          <button className={styles.close} onClick={onClose}>✕</button>
        </div>
        <nav className={styles.nav}>
          {NAV_LINKS.map((link) => (
            <a key={link} href="#" className={styles.link}>{link}</a>
          ))}
          <a href="#" className={`${styles.link} ${styles.prime}`}>Try Prime</a>
          <hr className={styles.divider} />
          <a href="#" className={styles.link}>Your Account</a>
          <a href="#" className={styles.link}>Your Orders</a>
          <a href="#" className={styles.link}>Returns &amp; Replacements</a>
          <a href="#" className={styles.link}>Help</a>
        </nav>
      </div>
    </>
  )
}
