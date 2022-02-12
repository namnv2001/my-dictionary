import { useState } from 'react'
import axios from 'axios'
import { SearchIcon } from '@chakra-ui/icons'

function Search({ setMeaning, setErrorResponse }) {
  const [word, setWord] = useState('')

  const receiveData = async (word) => {
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
      } else if (error.request) {
        setErrorResponse({
          title: 'No response from server',
          message: 'Please check your internet connection',
          resolution: 'Please check your internet connection',
        })
      } else {
        setErrorResponse({
          title: 'Unknown error',
          message: error.message,
          resolution: 'Please try again later',
        })
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    receiveData(word)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className={'flex'}>
        <input
          className={
            'py-2 px-4 rounded-l-full border-gray-500 border-r-0 text-base w-full outline-none focus-visible:outline-none'
          }
          type='text'
          name='word'
          placeholder='Enter a word'
          autoComplete='off'
          onChange={(e) => setWord(e.target.value)}
        />
        <button
          type='submit'
          className={
            'text-2xl py-2 px-4 rounded-r-full border-gray-500 border-l-0 bg-white outline-none'
          }
        >
          <SearchIcon />
        </button>
      </form>
    </div>
  )
}

export default Search
