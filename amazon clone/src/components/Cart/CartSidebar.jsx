// ── src/components/Cart/CartSidebar.jsx ──
import CartItem from './CartItem'
import styles from './CartSidebar.module.css'

export default function CartSidebar({ cart, cartTotal, onClose, onQty, onRemove }) {
  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <aside className={styles.sidebar}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Shopping Cart</h2>
          <button className={styles.close} onClick={onClose}>✕</button>
        </div>

        <div className={styles.items}>
          {cart.length === 0
            ? <p className={styles.empty}>Your cart is empty.</p>
            : cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onQty={onQty}
                onRemove={onRemove}
              />
            ))
          }
        </div>

        {cart.length > 0 && (
          <div className={styles.footer}>
            <p className={styles.total}>
              Subtotal: <strong>${cartTotal.toFixed(2)}</strong>
            </p>
            <button className={styles.checkout}>Proceed to checkout</button>
          </div>
        )}
      </aside>
    </>
  )
}
