// ── src/hooks/useToast.js ──
import { useState, useRef } from 'react'

export function useToast() {
  const [toast, setToast] = useState({ visible: false, message: '' })
  const timer = useRef(null)

  const showToast = (message) => {
    clearTimeout(timer.current)
    setToast({ visible: true, message })
    timer.current = setTimeout(() => setToast((t) => ({ ...t, visible: false })), 2500)
  }

  return { toast, showToast }
}
