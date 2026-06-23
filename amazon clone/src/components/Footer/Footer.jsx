// ── src/components/Footer/Footer.jsx ──
import AmazonLogo from '../UI/AmazonLogo'
import { FOOTER_COLS } from '../../data/navigation'
import styles from './Footer.module.css'

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className={styles.footer}>
      <div className={styles.backTop} onClick={scrollToTop}>↑ Back to top</div>

      <div className={styles.links}>
        {FOOTER_COLS.map((col) => (
          <div key={col.heading} className={styles.col}>
            <h4 className={styles.colHeading}>{col.heading}</h4>
            {col.links.map((link) => (
              <a key={link} href="#" className={styles.colLink}>{link}</a>
            ))}
          </div>
        ))}
      </div>

      <div className={styles.bottom}>
        <AmazonLogo height={24} />
        <p className={styles.copy}>© 2024, Amazon.com, Inc. or its affiliates</p>
        <div className={styles.policies}>
          <a href="#">Conditions of Use</a>
          <a href="#">Privacy Notice</a>
          <a href="#">Your Ads Privacy Choices</a>
        </div>
      </div>
    </footer>
  )
}
