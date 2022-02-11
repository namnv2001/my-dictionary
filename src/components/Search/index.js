import { useState } from 'react'
import axios from 'axios'

function Search({ setMeaning, setErrorResponse }) {
  const [word, setWord] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      )
      setMeaning(response.data[0])
      setErrorResponse(undefined)
    } catch (error) {
      setMeaning(undefined)
      if (error.response) {
        setErrorResponse(error.response.data)
      }
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='word'
          onChange={(e) => setWord(e.target.value)}
        />
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}

export default Search
