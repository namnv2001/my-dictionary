import axios from 'axios'
import styles from './style.module.scss'

function Definition({ setErrorResponse, setMeaning, definitions }) {
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
  const navigate = (e) => {
    receiveData(e.target.innerText)
  }

  return (
    <div className={'w-9/12'}>
      <h3>Definitions</h3>
      <div className={'h-48 overflow-auto'}>
        {definitions.map((def, index) => (
          <div key={index} className={'text-sm'}>
            <div className={'font-semibold'}>
              {index + 1}: {def.definition}
            </div>
            {def.example && <div>Example: {def.example}</div>}
            {def.antonyms[0] && (
              <div>
                Antonyms:{' '}
                {def.antonyms.map((antonym, index) => (
                  <span key={index}>
                    <span className={styles.word} onClick={(e) => navigate(e)}>
                      {antonym}
                    </span>
                    <span> | </span>
                  </span>
                ))}
              </div>
            )}
            {def.synonyms[0] && (
              <div>
                Synonyms:{' '}
                {def.synonyms.map((synonym, index) => (
                  <span key={index}>
                    <span className={styles.word} onClick={(e) => navigate(e)}>
                      {synonym}
                    </span>
                    <span> | </span>
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Definition
