import Definition from 'components/Definitions'
import Phonetics from 'components/Phonetics'

function Meaning({ meaning, errorResponse }) {
  return (
    <>
      {errorResponse && (
        <div>
          <h3>Error: {errorResponse.title}</h3>
          <div>{errorResponse.message}</div>
          <div>{errorResponse.resolution}</div>
        </div>
      )}
      {meaning && (
        <div>
          <h1>{meaning.word}</h1>
          {meaning.origin && <div>Origin: {meaning.origin}</div>}
          <Definition definitions={meaning.meanings[0].definitions} />
          <Phonetics phonetics={meaning.phonetics[0]} />
        </div>
      )}
    </>
  )
}

export default Meaning
