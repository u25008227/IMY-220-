import React, { useState } from 'react'
import './SearchInput.css'

const SearchInput = ({ onSearch, placeholder = 'Search...' }) => {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onSearch) {
      onSearch(value)
    }
  }

  return (
    <form className="search-input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="search-input-field"
      />
      <button type="submit" className="search-input-btn"></button>
    </form>
  )
}

export default SearchInput