// ── src/components/UI/AmazonLogo.jsx ──
export default function AmazonLogo({ height = 31 }) {
  return (
    <svg height={height} viewBox="0 0 130 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="32" fontSize="34" fontWeight="bold" fill="white" fontFamily="Arial, sans-serif">
        amazon
      </text>
      <path d="M2 36 Q32 46 65 40 Q98 34 128 40" stroke="#FF9900" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <polygon points="120,36 128,40 122,44" fill="#FF9900" />
    </svg>
  )
}
