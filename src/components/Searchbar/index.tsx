import React, { useState } from 'react'
import * as S from './style'

type Props = {
  onSearch: (query: string) => void
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [query, setQuery] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSearch(query)
  }

  return (
    <S.SearchForm onSubmit={handleSubmit}>
      <S.SearchInput
        type="text"
        placeholder="Homem de Ferro..."
        value={query}
        onChange={handleChange}
      />
    </S.SearchForm>
  )
}

export default SearchBar
