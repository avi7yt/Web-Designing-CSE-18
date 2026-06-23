// ── src/components/UI/Stars.jsx ──
export default function Stars({ rating }) {
  const full = Math.floor(rating)
  const half = rating % 1 >= 0.5

  return (
    <span style={{ color: '#FF9900', fontSize: 13 }}>
      {'★'.repeat(full)}
      {half ? '½' : ''}
      <span style={{ color: '#555', fontSize: 11, marginLeft: 4 }}>{rating}</span>
    </span>
  )
}
