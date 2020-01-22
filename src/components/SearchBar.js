import React from 'react'

export default function SearchBar({ searchTerm, updateSearchTerm }) {
    return (
        <section>
            <form className="search-bar">
                <input
                    type="text"
                    placeholder="Search for Kanji" 
                    value={searchTerm}
                    onChange={updateSearchTerm}
                    className='add-word-form-input'
                />
            </form>
        </section>
    )
}