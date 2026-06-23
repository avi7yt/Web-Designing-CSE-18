// ── src/components/Products/ProductCard.jsx ──
import { useState } from 'react'
import Stars from '../UI/Stars'
import styles from './ProductCard.module.css'

export default function ProductCard({ product, onAddToCart }) {
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    onAddToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1200)
  }

  return (
    <div className={styles.card}>
      <span className={styles.badge}>{product.badge}</span>
      <img
        className={styles.img}
        src={product.img}
        alt={product.title}
        loading="lazy"
      />
      <p className={styles.title}>{product.title}</p>
      <Stars rating={product.rating} />
      <p className={styles.reviews}>{product.reviews.toLocaleString()} ratings</p>
      <p className={styles.price}>${product.price.toFixed(2)}</p>
      <p className={styles.original}>List: ${product.original.toFixed(2)}</p>
      <button
        className={`${styles.btn} ${added ? styles.added : ''}`}
        onClick={handleAdd}
      >
        {added ? '✓ Added!' : 'Add to Cart'}
      </button>
    </div>
  )
}
