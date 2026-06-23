// ── src/components/Cart/CartItem.jsx ──
import styles from './CartItem.module.css'

export default function CartItem({ item, onQty, onRemove }) {
  return (
    <div className={styles.item}>
      <img src={item.img} alt={item.title} className={styles.img} />
      <div className={styles.info}>
        <p className={styles.title}>{item.title.slice(0, 55)}…</p>
        <p className={styles.price}>${(item.price * item.qty).toFixed(2)}</p>
        <div className={styles.qtyRow}>
          <button className={styles.qtyBtn} onClick={() => onQty(item.id, -1)}>−</button>
          <span className={styles.qty}>{item.qty}</span>
          <button className={styles.qtyBtn} onClick={() => onQty(item.id, 1)}>+</button>
        </div>
        <button className={styles.remove} onClick={() => onRemove(item.id)}>Remove</button>
      </div>
    </div>
  )
}
