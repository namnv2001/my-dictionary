import Definition from 'components/Definitions'
import Phonetics from 'components/Phonetics'

function Meaning({ meaning }) {
  console.log(meaning)

  return (
    <>
      {meaning && (
        <div>
          <h1>{meaning.word}</h1>
          <div>Origin: {meaning.origin}</div>
          <Definition definitions={meaning.meanings[0].definitions} />
          <Phonetics phonetics={meaning.phonetics[0]} />
        </div>
      )}
    </>
  )
}

export default Meaning
