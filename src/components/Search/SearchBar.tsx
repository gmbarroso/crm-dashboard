import React, { useState, useEffect } from 'react'
import { SearchBarProps } from '../../types/searchBar'
import styles from './SearchBar.module.css'

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [input, setInput] = useState('')

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            onSearch(input)
        }
        , 300)
        return () => clearTimeout(timeoutId)
    }, [input, onSearch])

return (
    <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search customers..."
        className={styles.searchBar}
    />
    )
}

export default SearchBar