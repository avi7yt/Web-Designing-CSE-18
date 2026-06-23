// ── src/hooks/useCart.js ──
import { useState } from 'react'

export function useCart() {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id)
      return existing
        ? prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i))
        : [...prev, { ...product, qty: 1 }]
    })
  }

  const changeQty = (id, delta) => {
    setCart((prev) => {
      const item = prev.find((i) => i.id === id)
      if (!item) return prev
      if (item.qty + delta <= 0) return prev.filter((i) => i.id !== id)
      return prev.map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i))
    })
  }

  const removeFromCart = (id) => setCart((prev) => prev.filter((i) => i.id !== id))

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0)
  const cartTotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0)

  return { cart, addToCart, changeQty, removeFromCart, cartCount, cartTotal }
}
