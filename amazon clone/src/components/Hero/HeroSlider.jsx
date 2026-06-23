// ── src/components/Hero/HeroSlider.jsx ──
import { useState, useEffect, useRef, useCallback } from 'react'
import { SLIDES } from '../../data/slides'
import { useWindowWidth } from '../../hooks/useWindowWidth'
import styles from './HeroSlider.module.css'

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef(null)
  const width = useWindowWidth()
  const isMobile = width < 600

  const goTo = useCallback(
    (index) => setCurrent((index + SLIDES.length) % SLIDES.length),
    []
  )

  const resetAndGo = (dir) => {
    clearInterval(timerRef.current)
    goTo(current + dir)
    timerRef.current = setInterval(() => goTo(current + 1), 5000)
  }

  useEffect(() => {
    timerRef.current = setInterval(() => goTo(current + 1), 5000)
    return () => clearInterval(timerRef.current)
  }, [current, goTo])

  return (
    <div className={styles.slider} style={{ height: isMobile ? 180 : 320 }}>
      {SLIDES.map((slide, i) => (
        <div
          key={slide.id}
          className={`${styles.slide} ${i === current ? styles.active : ''}`}
          style={{ background: slide.bg, padding: isMobile ? '12px 44px' : '40px 80px' }}
        >
          <div className={styles.content}>
            <h2 style={{ fontSize: isMobile ? 20 : 36 }}>{slide.title}</h2>
            {!isMobile && <p>{slide.sub}</p>}
            <button className={styles.cta}>{slide.cta}</button>
          </div>
          <div className={styles.emoji} style={{ fontSize: isMobile ? 36 : 80 }}>{slide.emoji}</div>
        </div>
      ))}

      <button className={`${styles.arrow} ${styles.prev}`} onClick={() => resetAndGo(-1)}>❮</button>
      <button className={`${styles.arrow} ${styles.next}`} onClick={() => resetAndGo(1)}>❯</button>

      <div className={styles.dots}>
        {SLIDES.map((_, i) => (
          <div
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  )
}
