// ── src/App.jsx ──
import { useState, useRef, useEffect } from 'react'
import { PRODUCTS } from './data/products'

import Navbar       from './components/Navbar/Navbar'
import MobileMenu   from './components/Navbar/MobileMenu'
import HeroSlider   from './components/Hero/HeroSlider'
import CategoryGrid from './components/Categories/CategoryGrid'
import ProductGrid  from './components/Products/ProductGrid'
import CartSidebar  from './components/Cart/CartSidebar'
import Footer       from './components/Footer/Footer'
import Toast        from './components/UI/Toast'

import { useCart }  from './hooks/useCart'
import { useToast } from './hooks/useToast'

export default function App() {
  const { cart, addToCart, changeQty, removeFromCart, cartCount, cartTotal } = useCart()
  const { toast, showToast } = useToast()

  const [cartOpen,   setCartOpen]   = useState(false)
  const [menuOpen,   setMenuOpen]   = useState(false)
  const [searchVal,  setSearchVal]  = useState('')
  const [filtered,   setFiltered]   = useState(PRODUCTS)

  const dealsRef = useRef(null)

  // Lock body scroll when overlays open
  useEffect(() => {
    document.body.style.overflow = (cartOpen || menuOpen) ? 'hidden' : ''
  }, [cartOpen, menuOpen])

  // Close on Escape
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') { setCartOpen(false); setMenuOpen(false) }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  const handleAddToCart = (product) => {
    addToCart(product)
    showToast(`"${product.title.slice(0, 40)}…" added to cart`)
  }

  const handleSearch = () => {
    const q = searchVal.trim().toLowerCase()
    const results = q ? PRODUCTS.filter((p) => p.title.toLowerCase().includes(q)) : PRODUCTS
    setFiltered(results)
    dealsRef.current?.scrollIntoView({ behavior: 'smooth' })
    if (q && results.length === 0) {
      showToast('No results found. Showing all deals.')
      setFiltered(PRODUCTS)
    }
  }

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Navbar */}
      <Navbar
        cartCount={cartCount}
        searchVal={searchVal}
        onSearchChange={setSearchVal}
        onSearch={handleSearch}
        onCartOpen={() => setCartOpen(true)}
        onMenuOpen={() => setMenuOpen(true)}
      />

      {/* Hero */}
      <HeroSlider />

      {/* India redirect banner */}
      <div style={{
        background: '#f8f8f8', borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd',
        textAlign: 'center', padding: '8px 12px', fontSize: 12, color: '#555',
      }}>
        You are on amazon.com. You can also shop on{' '}
        <a href="#" style={{ color: '#007185' }}>Amazon India</a> for millions of products.{' '}
        <a href="#" style={{ color: '#007185' }}>Click here to go to amazon.in</a>
      </div>

      {/* Main content */}
      <main style={{ maxWidth: 1500, margin: '0 auto', padding: '16px 12px' }}>
        <CategoryGrid />
        <ProductGrid
          ref={dealsRef}
          products={filtered}
          onAddToCart={handleAddToCart}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Overlays */}
      {cartOpen && (
        <CartSidebar
          cart={cart}
          cartTotal={cartTotal}
          onClose={() => setCartOpen(false)}
          onQty={changeQty}
          onRemove={removeFromCart}
        />
      )}
      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}

      {/* Toast */}
      <Toast message={toast.message} visible={toast.visible} />
    </div>
  )
}
