// ── src/components/UI/SearchBar.jsx ──
import styles from './SearchBar.module.css'

export default function SearchBar({ value, onChange, onSearch, hideCategory = false }) {
  return (
    <div className={styles.wrapper}>
      {!hideCategory && (
        <select className={styles.category}>
          <option>All</option>
          <option>Electronics</option>
          <option>Books</option>
          <option>Fashion</option>
          <option>Home &amp; Kitchen</option>
        </select>
      )}
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && onSearch()}
        placeholder="Search Amazon"
      />
      <button className={styles.btn} onClick={onSearch}>
        🔍
      </button>
    </div>
  )
}
