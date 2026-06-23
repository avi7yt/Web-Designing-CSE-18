// ── src/components/Products/ProductGrid.jsx ──
import { forwardRef } from 'react'
import ProductCard from './ProductCard'
import styles from './ProductGrid.module.css'

const ProductGrid = forwardRef(function ProductGrid({ products, onAddToCart }, ref) {
  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Today's Deals</h2>
        <a href="#" className={styles.seeAll}>See all deals</a>
      </div>

      {products.length === 0 ? (
        <p className={styles.empty}>No products found. Try a different search.</p>
      ) : (
        <div className={styles.grid}>
          {products.map((p) => (
            <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
          ))}
        </div>
      )}
    </section>
  )
})

export default ProductGrid
