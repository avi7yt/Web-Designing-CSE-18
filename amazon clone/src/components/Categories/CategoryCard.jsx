// ── src/components/Categories/CategoryCard.jsx ──
import styles from './CategoryCard.module.css'

function SingleLayout({ img, title }) {
  return <img src={img} alt={title} className={styles.singleImg} />
}

function QuadLayout({ items }) {
  return (
    <div className={styles.quad}>
      {items.map((item) => (
        <div key={item.label} className={styles.quadItem}>
          <img src={item.img} alt={item.label} className={styles.quadImg} />
          <span className={styles.itemLabel}>{item.label}</span>
        </div>
      ))}
    </div>
  )
}

function KitchenLayout({ mainImg, mainLabel, items }) {
  return (
    <div className={styles.kitchen}>
      <img src={mainImg} alt={mainLabel} className={styles.kitchenMain} />
      <span className={styles.kitchenLabel}>{mainLabel}</span>
      <div className={styles.kitchenRow}>
        {items.map((item) => (
          <div key={item.label} className={styles.kitchenItem}>
            <img src={item.img} alt={item.label} className={styles.kitchenSubImg} />
            <span className={styles.kitchenSubLabel}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function CategoryCard({ cat }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{cat.title}</h3>

      {cat.type === 'single'  && <SingleLayout  img={cat.img} title={cat.title} />}
      {cat.type === 'quad'    && <QuadLayout    items={cat.items} />}
      {cat.type === 'kitchen' && <KitchenLayout mainImg={cat.mainImg} mainLabel={cat.mainLabel} items={cat.items} />}

      <a href="#" className={styles.link}>{cat.link}</a>
    </div>
  )
}
