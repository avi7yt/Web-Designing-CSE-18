// ── src/components/UI/Toast.jsx ──
export default function Toast({ message, visible }) {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 24,
        left: '50%',
        transform: `translateX(-50%) translateY(${visible ? 0 : 20}px)`,
        background: '#232F3E',
        color: '#fff',
        padding: '10px 24px',
        borderRadius: 4,
        fontSize: 14,
        zIndex: 9999,
        opacity: visible ? 1 : 0,
        transition: 'all 0.3s ease',
        pointerEvents: 'none',
        whiteSpace: 'nowrap',
        maxWidth: '90vw',
        textAlign: 'center',
      }}
    >
      {message}
    </div>
  )
}
