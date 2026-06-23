// ── src/components/Categories/CategoryGrid.jsx ──
import { CATEGORIES } from '../../data/categories'
import CategoryCard from './CategoryCard'
import styles from './CategoryGrid.module.css'

export default function CategoryGrid() {
  return (
    <div className={styles.grid}>
      {CATEGORIES.map((cat) => (
        <CategoryCard key={cat.id} cat={cat} />
      ))}
    </div>
  )
}
