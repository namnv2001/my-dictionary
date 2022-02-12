import axios from 'axios'

function useAxios({ setMeaning, setErrorResponse }) {
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
  return { receiveData }
}

export default useAxios
